---
title: Téléchargements
description: Téléchargez les binaires CLI Magenta Security Sign pour votre plateforme
---

<script setup>
import DownloadsPage from '../../components/DownloadsPage.vue'
</script>

# Téléchargements

Téléchargez la CLI <ProductName/> (mss) pour votre système d'exploitation.

<DownloadsPage />

## Installation

Après le téléchargement :

1. **Extraire l'archive** (pour les fichiers .tar.gz) :
   ```bash
   tar -xzf mss_<version>_<os>_<arch>.tar.gz
   ```

2. **Installer le paquet** (pour .deb/.rpm) :
   ```bash
   # Debian/Ubuntu
   sudo dpkg -i mss_<version>_linux_amd64.deb

   # RHEL/Fedora
   sudo rpm -i mss_<version>_linux_amd64.rpm
   ```

3. **Rendre exécutable et déplacer vers PATH** (pour les tarballs) :
   ```bash
   chmod +x mss
   sudo mv mss /usr/local/bin/
   ```

Pour des instructions d'installation détaillées, consultez le [Guide d'installation](/fr/guides/installation).

## Démarrage rapide

```bash
# Signer un document
mss sign document.pdf

# Demander une signature
mss request-signature document.pdf

# Afficher l'aide
mss --help
```

Pour la documentation complète de la CLI, consultez la [Référence CLI](/fr/references/cli).

## Configuration requise

- **macOS** : 10.15 (Catalina) ou ultérieur
- **Linux** : Ubuntu 20.04+, Debian 10+, RHEL 8+ ou compatible
- **Windows** : Windows 10 ou ultérieur
- **FreeBSD** : FreeBSD 12 ou ultérieur

