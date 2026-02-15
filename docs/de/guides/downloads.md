---
title: Herunterladen
description: Laden Sie Magenta Security Sign CLI-Binärdateien für Ihre Plattform herunter
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Herunterladen

Laden Sie die <ProductName/> CLI (<CommandName/>) für Ihr Betriebssystem herunter.

<DownloadsPage />

## Installation

Nach dem Download:

### Archiv entpacken (für .tar.gz-Dateien)

<div class="language-bash"><pre><code>tar -xzf {{ commandName }}_&lt;version&gt;_&lt;os&gt;_&lt;arch&gt;.tar.gz</code></pre></div>

### Paket installieren (für .deb/.rpm)

<div class="language-bash"><pre><code># Debian/Ubuntu
sudo dpkg -i {{ commandName }}_&lt;version&gt;_linux_amd64.deb
# RHEL/Fedora
sudo rpm -i {{ commandName }}_&lt;version&gt;_linux_amd64.rpm</code></pre></div>

### Ausführbar machen und in PATH verschieben (für Tarballs)

<div class="language-bash"><pre><code>chmod +x {{ commandName }}
sudo mv {{ commandName }} /usr/local/bin/</code></pre></div>

Detaillierte Installationsanweisungen finden Sie im [Installationsleitfaden](/de/guides/installation).

## Schnellstart

<div class="language-bash"><pre><code># Ein Dokument signieren
{{ commandName }} sign document.pdf
# Eine Signatur anfordern
{{ commandName }} request-signature document.pdf
# Hilfe anzeigen
{{ commandName }} --help</code></pre></div>

Die vollständige CLI-Dokumentation finden Sie in der [CLI-Referenz](/de/references/cli).

## Systemanforderungen

- **macOS**: 10.15 (Catalina) oder höher
- **Linux**: Ubuntu 20.04+, Debian 10+, RHEL 8+ oder kompatibel
- **Windows**: Windows 10 oder höher
- **FreeBSD**: FreeBSD 12 oder höher
