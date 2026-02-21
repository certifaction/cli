---
title: Scarica
description: Scarica i binari CLI Magenta Security Sign per la tua piattaforma
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Scarica

Scarica la CLI <ProductName/> (<CommandName/>) per il tuo sistema operativo.

<DownloadsPage />

## Installazione

Dopo il download:

### Estrarre l'archivio (per file .tar.gz)

<div class="language-bash"><pre><code>tar -xzf {{ commandName }}_&lt;version&gt;_&lt;os&gt;_&lt;arch&gt;.tar.gz</code></pre></div>

### Installare il pacchetto (per .deb/.rpm)

<div class="language-bash"><pre><code># Debian/Ubuntu
sudo dpkg -i {{ commandName }}_&lt;version&gt;_linux_amd64.deb
# RHEL/Fedora
sudo rpm -i {{ commandName }}_&lt;version&gt;_linux_amd64.rpm</code></pre></div>

### Rendere eseguibile e spostare nel PATH (per tarball)

<div class="language-bash"><pre><code>chmod +x {{ commandName }}
sudo mv {{ commandName }} /usr/local/bin/</code></pre></div>

Per istruzioni dettagliate sull'installazione, consulta la [Guida all'installazione](/it/guides/installation).

## Avvio rapido

<div class="language-bash"><pre><code># Firmare un documento
{{ commandName }} sign document.pdf
# Richiedere una firma
{{ commandName }} request-signature document.pdf
# Visualizzare la guida
{{ commandName }} --help</code></pre></div>

Per la documentazione completa della CLI, consulta il [Riferimento CLI](/it/references/cli).

## Requisiti di sistema

- **macOS**: 10.15 (Catalina) o successivo
- **Linux**: Ubuntu 20.04+, Debian 10+, RHEL 8+ o compatibile
- **Windows**: Windows 10 o successivo
- **FreeBSD**: FreeBSD 12 o successivo
