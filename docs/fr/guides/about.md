---
title: Qu'est-ce que Magenta Security Sign ?
description: Magenta Security Sign la solution pour signer numériquement des documents hautement confidentiels
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { theme } = useTheme()
</script>

# Qu'est-ce que <ProductName/> ?

<div class="tip custom-block" style="padding-top: 8px">

Vous voulez juste l'essayer ? Passez au [Démarrage Rapide](./getting-started-api).

</div>

<a :href="theme.productUrl"><ProductName/></a> est la signature électronique axée sur la confidentialité avec

- chiffrement de bout en bout des documents,
- vérification d'identité légalement valide,
- Jumeau Numérique reliant les documents imprimés avec leur original numérique.

## Chiffrement de bout en bout

Nous traitons vos documents PDF localement au lieu de les envoyer vers un serveur central hors de votre contrôle.
Quand nous devons stocker des documents, nous les chiffrons toujours côté client avant de nous les envoyer.
Si vous devez partager des références de documents, vous pouvez toujours les protéger avec un
mot de passe cryptographiquement fort.

## Vérification d'identité légalement valide

<ProductName/> supporte plusieurs niveaux de signature depuis la signature électronique simple (SES) ou la signature électronique avancée (AES) jusqu'à la signature électronique qualifiée (QES).

## Signatures vérifiables pour documents imprimés

Vous pouvez sécuriser vos documents imprimés avec un Jumeau Numérique.
Les Jumeaux Numériques connectent les documents imprimés à leurs originaux numériques.
De cette façon, vous pouvez télécharger la copie numérique stockée de manière sécurisée sur votre appareil, vérifier son authenticité,
et éliminer tout risque de fraude documentaire.