#!/usr/bin/env bash
#
# Download CLI releases from certifaction-cli GitHub repo
# Stores binaries with original certifaction-cli_* names (canonical)
# Theme system controls display names at runtime
#
set -euo pipefail

REPO="certifaction/certifaction-cli"
DOWNLOADS_DIR="docs/public/downloads"
NUM_RELEASES=4

# All 12 file patterns to download (suffix after version)
FILE_PATTERNS=(
  "darwin_amd64.tar.gz"
  "darwin_arm64.tar.gz"
  "freebsd_amd64.tar.gz"
  "freebsd_arm64.tar.gz"
  "linux_amd64.deb"
  "linux_amd64.rpm"
  "linux_amd64.tar.gz"
  "linux_arm64.deb"
  "linux_arm64.rpm"
  "linux_arm64.tar.gz"
  "windows_amd64.tar.gz"
  "windows_arm64.tar.gz"
)

BINARY_PREFIX="certifaction-cli"

echo "=== CLI Release Downloader ==="
echo "Repository: ${REPO}"
echo "Target directory: ${DOWNLOADS_DIR}"
echo "Number of releases to keep: ${NUM_RELEASES}"
echo "Binary prefix: ${BINARY_PREFIX}"
echo "Binary formats: ${#FILE_PATTERNS[@]}"
echo ""

# Get stable releases (non-prerelease)
echo "Fetching stable releases..."
VERSIONS=()
while IFS= read -r line; do
  VERSIONS+=("$line")
done < <(gh api repos/${REPO}/releases \
  --jq '.[] | select(.prerelease == false) | .tag_name' \
  | head -n "${NUM_RELEASES}")

if [[ ${#VERSIONS[@]} -eq 0 ]]; then
  echo "ERROR: No releases found"
  exit 1
fi

echo "Found ${#VERSIONS[@]} stable releases: ${VERSIONS[*]}"
echo ""

# Download each version
for version in "${VERSIONS[@]}"; do
  version_num="${version#v}"  # Remove 'v' prefix
  version_dir="${DOWNLOADS_DIR}/${version}"

  echo "--- Processing ${version} ---"

  # Skip if already exists and has all files
  if [[ -d "${version_dir}" ]] && [[ -f "${version_dir}/checksums.txt" ]]; then
    file_count=$(ls -1 "${version_dir}"/${BINARY_PREFIX}_* 2>/dev/null | wc -l | xargs || echo 0)
    if [[ ${file_count} -ge ${#FILE_PATTERNS[@]} ]]; then
      echo "  Already exists with ${file_count} files, skipping download"
      continue
    fi
  fi

  mkdir -p "${version_dir}"

  for pattern in "${FILE_PATTERNS[@]}"; do
    src_name="${BINARY_PREFIX}_${version_num}_${pattern}"

    # Skip if already downloaded
    if [[ -f "${version_dir}/${src_name}" ]]; then
      echo "  ${src_name} already exists, skipping"
      continue
    fi

    echo "  Downloading ${src_name}..."

    if gh release download "${version}" \
        --repo "${REPO}" \
        --pattern "${src_name}" \
        --dir "${version_dir}" \
        --clobber 2>/dev/null; then
      echo "  Downloaded ${src_name}"
    else
      echo "  WARNING: ${src_name} not found, skipping"
    fi
  done

  # Generate checksums
  echo "  Generating checksums..."
  (cd "${version_dir}" && sha256sum ${BINARY_PREFIX}_* > checksums.txt 2>/dev/null || true)

  echo "  Done with ${version}"
  echo ""
done

# Clean up empty version directories (releases with no assets)
echo "--- Cleaning up empty version directories ---"
for dir in "${DOWNLOADS_DIR}"/v*/; do
  [[ -d "$dir" ]] || continue
  version=$(basename "$dir")
  file_count=$(find "${dir}" -name "${BINARY_PREFIX}_*" -type f 2>/dev/null | wc -l | tr -d '[:space:]')
  file_count=${file_count:-0}
  if [[ ${file_count} -eq 0 ]]; then
    echo "  Removing empty release: ${version} (no binaries)"
    rm -rf "$dir"
  fi
done
echo ""

# Build list of versions with actual binaries
VALID_VERSIONS=()
for version in "${VERSIONS[@]}"; do
  version_dir="${DOWNLOADS_DIR}/${version}"
  if [[ -d "${version_dir}" ]]; then
    file_count=$(find "${version_dir}" -name "${BINARY_PREFIX}_*" -type f 2>/dev/null | wc -l | tr -d '[:space:]')
    file_count=${file_count:-0}
    if [[ ${file_count} -gt 0 ]]; then
      VALID_VERSIONS+=("$version")
    fi
  fi
done

if [[ ${#VALID_VERSIONS[@]} -eq 0 ]]; then
  echo "ERROR: No versions with binaries found"
  exit 1
fi

# Update latest directory
LATEST_VERSION="${VALID_VERSIONS[0]}"
echo "--- Updating latest to ${LATEST_VERSION} ---"
rm -rf "${DOWNLOADS_DIR}/latest"
mkdir -p "${DOWNLOADS_DIR}/latest"
cp "${DOWNLOADS_DIR}/${LATEST_VERSION}"/* "${DOWNLOADS_DIR}/latest/"
echo "  Copied files to latest/"
echo ""

# Generate versions.json (only versions with binaries)
echo "--- Generating versions.json ---"
{
  echo "{"
  echo "  \"latest\": \"${LATEST_VERSION#v}\","
  echo "  \"versions\": ["
  for i in "${!VALID_VERSIONS[@]}"; do
    v="${VALID_VERSIONS[$i]}"
    if [[ $i -eq $((${#VALID_VERSIONS[@]} - 1)) ]]; then
      echo "    \"${v#v}\""
    else
      echo "    \"${v#v}\","
    fi
  done
  echo "  ]"
  echo "}"
} > "${DOWNLOADS_DIR}/versions.json"
echo "  Created versions.json with ${#VALID_VERSIONS[@]} versions"
echo ""

# Clean up old releases (not in the valid versions list)
echo "--- Cleaning up old releases ---"
for dir in "${DOWNLOADS_DIR}"/v*/; do
  [[ -d "$dir" ]] || continue
  version=$(basename "$dir")

  keep=false
  for v in "${VALID_VERSIONS[@]}"; do
    [[ "$version" == "$v" ]] && keep=true && break
  done

  if [[ "$keep" == false ]]; then
    echo "  Removing old release: ${version}"
    rm -rf "$dir"
  fi
done
echo ""

echo "=== Complete ==="
echo "Latest version: ${LATEST_VERSION}"
echo "Total versions: ${#VALID_VERSIONS[@]}"
echo ""
echo "Directory contents:"
ls -la "${DOWNLOADS_DIR}/"
echo ""
echo "Total size:"
du -sh "${DOWNLOADS_DIR}/"
