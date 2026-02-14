---
title: Scarica
description: Scarica i binari CLI Magenta Security Sign per la tua piattaforma
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
</script>

# Scarica

Scarica la CLI <ProductName/> (mss) per il tuo sistema operativo.

<DownloadsPage />

## Installazione

Dopo il download:

1. **Estrarre l'archivio** (per file .tar.gz):
   ```bash
   tar -xzf mss_<version>_<os>_<arch>.tar.gz
   ```

2. **Installare il pacchetto** (per .deb/.rpm):
   ```bash
   # Debian/Ubuntu
   sudo dpkg -i mss_<version>_linux_amd64.deb

   # RHEL/Fedora
   sudo rpm -i mss_<version>_linux_amd64.rpm
   ```

3. **Rendere eseguibile e spostare nel PATH** (per tarball):
   ```bash
   chmod +x mss
   sudo mv mss /usr/local/bin/
   ```

Per istruzioni dettagliate sull'installazione, consulta la [Guida all'installazione](/it/guides/installation).

## Avvio rapido

```bash
# Firmare un documento
mss sign document.pdf

# Richiedere una firma
mss request-signature document.pdf

# Visualizzare la guida
mss --help
```

Per la documentazione completa della CLI, consulta il [Riferimento CLI](/it/references/cli).

## Requisiti di sistema

- **macOS**: 10.15 (Catalina) o successivo
- **Linux**: Ubuntu 20.04+, Debian 10+, RHEL 8+ o compatibile
- **Windows**: Windows 10 o successivo
- **FreeBSD**: FreeBSD 12 o successivo

