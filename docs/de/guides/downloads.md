---
title: Herunterladen
description: Laden Sie Magenta Security Sign CLI-Binärdateien für Ihre Plattform herunter
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
</script>

# Herunterladen

Laden Sie die <ProductName/> CLI (mss) für Ihr Betriebssystem herunter.

<DownloadsPage />

## Installation

Nach dem Download:

1. **Archiv entpacken** (für .tar.gz-Dateien):
   ```bash
   tar -xzf mss_<version>_<os>_<arch>.tar.gz
   ```

2. **Paket installieren** (für .deb/.rpm):
   ```bash
   # Debian/Ubuntu
   sudo dpkg -i mss_<version>_linux_amd64.deb

   # RHEL/Fedora
   sudo rpm -i mss_<version>_linux_amd64.rpm
   ```

3. **Ausführbar machen und in PATH verschieben** (für Tarballs):
   ```bash
   chmod +x mss
   sudo mv mss /usr/local/bin/
   ```

Detaillierte Installationsanweisungen finden Sie im [Installationsleitfaden](/de/guides/installation).

## Schnellstart

```bash
# Ein Dokument signieren
mss sign document.pdf

# Eine Signatur anfordern
mss request-signature document.pdf

# Hilfe anzeigen
mss --help
```

Die vollständige CLI-Dokumentation finden Sie in der [CLI-Referenz](/de/references/cli).

## Systemanforderungen

- **macOS**: 10.15 (Catalina) oder höher
- **Linux**: Ubuntu 20.04+, Debian 10+, RHEL 8+ oder kompatibel
- **Windows**: Windows 10 oder höher
- **FreeBSD**: FreeBSD 12 oder höher

