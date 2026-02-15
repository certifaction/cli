---
title: Téléchargements
description: Téléchargez les binaires CLI Magenta Security Sign pour votre plateforme
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Téléchargements

Téléchargez la CLI <ProductName/> (<CommandName/>) pour votre système d'exploitation.

<DownloadsPage />

## Installation

Après le téléchargement :

### Extraire l'archive (pour les fichiers .tar.gz)

<div class="language-bash"><pre><code>tar -xzf {{ commandName }}_&lt;version&gt;_&lt;os&gt;_&lt;arch&gt;.tar.gz</code></pre></div>

### Installer le paquet (pour .deb/.rpm)

<div class="language-bash"><pre><code># Debian/Ubuntu
sudo dpkg -i {{ commandName }}_&lt;version&gt;_linux_amd64.deb
# RHEL/Fedora
sudo rpm -i {{ commandName }}_&lt;version&gt;_linux_amd64.rpm</code></pre></div>

### Rendre exécutable et déplacer vers PATH (pour les tarballs)

<div class="language-bash"><pre><code>chmod +x {{ commandName }}
sudo mv {{ commandName }} /usr/local/bin/</code></pre></div>

Pour des instructions d'installation détaillées, consultez le [Guide d'installation](/fr/guides/installation).

## Démarrage rapide

<div class="language-bash"><pre><code># Signer un document
{{ commandName }} sign document.pdf
# Demander une signature
{{ commandName }} request-signature document.pdf
# Afficher l'aide
{{ commandName }} --help</code></pre></div>

Pour la documentation complète de la CLI, consultez la [Référence CLI](/fr/references/cli).

## Configuration requise

- **macOS** : 10.15 (Catalina) ou ultérieur
- **Linux** : Ubuntu 20.04+, Debian 10+, RHEL 8+ ou compatible
- **Windows** : Windows 10 ou ultérieur
- **FreeBSD** : FreeBSD 12 ou ultérieur
