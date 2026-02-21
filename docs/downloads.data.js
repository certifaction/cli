// Build-time data loader for downloads page
// Reads versions.json and generates download links for all platforms
// Uses canonical certifaction-cli_* filenames — theme system provides display names at runtime

import fs from 'fs'
import path from 'path'

const DOWNLOADS_DIR = 'docs/public/downloads'
const CANONICAL_PREFIX = 'certifaction-cli'

// All supported platforms and formats
const PLATFORMS = {
  macos: {
    name: 'macOS',
    files: [
      { arch: 'Intel (AMD64)', os: 'darwin', archKey: 'amd64', format: 'tar.gz' },
      { arch: 'Apple Silicon (ARM64)', os: 'darwin', archKey: 'arm64', format: 'tar.gz' }
    ]
  },
  linux: {
    name: 'Linux',
    files: [
      { arch: 'AMD64', os: 'linux', archKey: 'amd64', format: 'deb', formatName: 'Debian (.deb)' },
      { arch: 'AMD64', os: 'linux', archKey: 'amd64', format: 'rpm', formatName: 'RPM (.rpm)' },
      { arch: 'AMD64', os: 'linux', archKey: 'amd64', format: 'tar.gz', formatName: 'Tarball (.tar.gz)' },
      { arch: 'ARM64', os: 'linux', archKey: 'arm64', format: 'deb', formatName: 'Debian (.deb)' },
      { arch: 'ARM64', os: 'linux', archKey: 'arm64', format: 'rpm', formatName: 'RPM (.rpm)' },
      { arch: 'ARM64', os: 'linux', archKey: 'arm64', format: 'tar.gz', formatName: 'Tarball (.tar.gz)' }
    ]
  },
  windows: {
    name: 'Windows',
    files: [
      { arch: 'AMD64', os: 'windows', archKey: 'amd64', format: 'tar.gz' },
      { arch: 'ARM64', os: 'windows', archKey: 'arm64', format: 'tar.gz' }
    ]
  },
  freebsd: {
    name: 'FreeBSD',
    files: [
      { arch: 'AMD64', os: 'freebsd', archKey: 'amd64', format: 'tar.gz' },
      { arch: 'ARM64', os: 'freebsd', archKey: 'arm64', format: 'tar.gz' }
    ]
  }
}

function generateCanonicalFileName(version, os, arch, format) {
  return `${CANONICAL_PREFIX}_${version}_${os}_${arch}.${format}`
}

function generateDownloadLink(version, os, arch, format, isLatest = false) {
  const fileName = generateCanonicalFileName(version, os, arch, format)
  const dir = isLatest ? 'latest' : `v${version}`
  return `/downloads/${dir}/${fileName}`
}

function generatePlatformDownloads(version, isLatest = false) {
  const platforms = {}

  for (const [key, platform] of Object.entries(PLATFORMS)) {
    platforms[key] = {
      name: platform.name,
      downloads: platform.files.map(file => ({
        arch: file.arch,
        format: file.formatName || file.format,
        // Canonical filename for the actual href link
        canonicalFileName: generateCanonicalFileName(version, file.os, file.archKey, file.format),
        // Suffix for building display names (theme prefix is prepended at runtime)
        fileSuffix: `${version}_${file.os}_${file.archKey}.${file.format}`,
        link: generateDownloadLink(version, file.os, file.archKey, file.format, isLatest)
      }))
    }
  }

  return platforms
}

export default {
  watch: ['./**/versions.json'],
  load() {
    const versionsPath = path.join(process.cwd(), DOWNLOADS_DIR, 'versions.json')

    if (!fs.existsSync(versionsPath)) {
      console.warn('versions.json not found, using empty data')
      return {
        latest: null,
        versions: [],
        platforms: PLATFORMS
      }
    }

    const versionsData = JSON.parse(fs.readFileSync(versionsPath, 'utf-8'))
    const { latest, versions } = versionsData

    // Generate download data for latest version
    const latestDownloads = latest ? {
      version: latest,
      platforms: generatePlatformDownloads(latest, true),
      checksumsLink: '/downloads/latest/checksums.txt'
    } : null

    // Generate download data for previous versions (exclude latest)
    const previousVersions = versions
      .filter(v => v !== latest)
      .map(version => ({
        version,
        platforms: generatePlatformDownloads(version, false),
        checksumsLink: `/downloads/v${version}/checksums.txt`
      }))

    return {
      latest: latestDownloads,
      previousVersions,
      platformOrder: ['macos', 'linux', 'windows', 'freebsd']
    }
  }
}
