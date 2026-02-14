---
title: Downloads
description: Download Magenta Security Sign CLI binaries for your platform
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
</script>

# Downloads

Download the <ProductName/> CLI (mss) for your operating system.

<DownloadsPage />

## Installation

After downloading:

1. **Extract the archive** (for .tar.gz files):
   ```bash
   tar -xzf mss_<version>_<os>_<arch>.tar.gz
   ```

2. **Install the package** (for .deb/.rpm):
   ```bash
   # Debian/Ubuntu
   sudo dpkg -i mss_<version>_linux_amd64.deb

   # RHEL/Fedora
   sudo rpm -i mss_<version>_linux_amd64.rpm
   ```

3. **Make executable and move to PATH** (for tarballs):
   ```bash
   chmod +x mss
   sudo mv mss /usr/local/bin/
   ```

For detailed installation instructions, see the [Installation Guide](/en/guides/installation).

## Quick Start

```bash
# Sign a document
mss sign document.pdf

# Request a signature
mss request-signature document.pdf

# View help
mss --help
```

For complete CLI documentation, see the [CLI Reference](/en/references/cli).

## System Requirements

- **macOS**: 10.15 (Catalina) or later
- **Linux**: Ubuntu 20.04+, Debian 10+, RHEL 8+, or compatible
- **Windows**: Windows 10 or later
- **FreeBSD**: FreeBSD 12 or later

