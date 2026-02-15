---
title: Downloads
description: Download Magenta Security Sign CLI binaries for your platform
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Downloads

Download the <ProductName/> CLI (<CommandName/>) for your operating system.

<DownloadsPage />

## Installation

After downloading:

### Extract the archive (for .tar.gz files)

<div class="language-bash"><pre><code>tar -xzf {{ commandName }}_&lt;version&gt;_&lt;os&gt;_&lt;arch&gt;.tar.gz</code></pre></div>

### Install the package (for .deb/.rpm)

<div class="language-bash"><pre><code># Debian/Ubuntu
sudo dpkg -i {{ commandName }}_&lt;version&gt;_linux_amd64.deb
# RHEL/Fedora
sudo rpm -i {{ commandName }}_&lt;version&gt;_linux_amd64.rpm</code></pre></div>

### Make executable and move to PATH (for tarballs)

<div class="language-bash"><pre><code>chmod +x {{ commandName }}
sudo mv {{ commandName }} /usr/local/bin/</code></pre></div>

For detailed installation instructions, see the [Installation Guide](/en/guides/installation).

## Quick Start

<div class="language-bash"><pre><code># Sign a document
{{ commandName }} sign document.pdf
# Request a signature
{{ commandName }} request-signature document.pdf
# View help
{{ commandName }} --help</code></pre></div>

For complete CLI documentation, see the [CLI Reference](/en/references/cli).

## System Requirements

- **macOS**: 10.15 (Catalina) or later
- **Linux**: Ubuntu 20.04+, Debian 10+, RHEL 8+, or compatible
- **Windows**: Windows 10 or later
- **FreeBSD**: FreeBSD 12 or later
