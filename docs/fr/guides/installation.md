---
title: Comment installer le Client Certifaction
description: Comment installer le Client Certifaction pour signer numériquement des documents hautement confidentiels
---

# Installation

Utilisez le Client Certifaction pour vous intégrer à Certifaction.
L'utilisation du Client garantit que vos documents sont traités localement et ne sont jamais envoyés
en texte clair.

## Exigences

Le Client Certifaction est distribué sous forme de fichier exécutable compatible avec les récents systèmes d'exploitation
Linux, Windows et macOS et peut être exécuté dans un conteneur Docker.

Le Client nécessite un accès à l'API Certifaction et un jeton d'authentification pour la plupart
de ses commandes.

Lors de l'exécution du Client comme API Locale, l'exécutable écoutera sur les ports HTTP
qui doivent être accessibles aux applications clientes.

## Comment installer

Téléchargez le Client Certifaction depuis notre [Dépôt Public](https://github.com/certifaction/cli/releases).

Veuillez créer une [Issue](https://github.com/certifaction/cli/issues) si vous ne
trouvez pas d'exécutable pour votre plateforme.

## Utilisation

Vous pouvez utiliser le Client Certifaction comme API Locale ou comme CLI.
Dans les deux cas, vous pourrez signer un ou plusieurs documents et inviter des
signataires externes.

### Utiliser le Client comme API Locale

<div class="tip custom-block" style="padding-top: 8px">

Vous voulez juste essayer l'API Locale ? Passez au [Démarrage Rapide API Locale](./getting-started-api).

</div>
Dans ce scénario, vous démarrerez l'API Locale, soit
directement dans un nœud ou une VM, soit dans un conteneur Docker. Le Client utilisera
HTTP pour signer des documents avec la garantie que les documents ne quittent pas
l'environnement local. C'est la meilleure option pour les signatures de documents centralisées
où les documents sont signés pendant un flux de travail de documents automatisé.

![Diagramme du mode serveur HTTP](../../assets/http-server-mode-diagram.png)

### Utiliser le client comme interface en ligne de commande

<div class="tip custom-block" style="padding-top: 8px">

Vous voulez juste essayer le CLI ? Passez au [Démarrage Rapide CLI](./getting-started-cli).

</div>

Utilisez le Client comme interface en ligne de commande (CLI) pour l'automatisation de bureau ou pour intégrer Certifaction
dans une application autonome.

Les applications autonomes peuvent appeler directement l'exécutable Certifaction pour signer des documents ou demander
des signatures d'autres personnes.

Les documents peuvent soit être sauvegardés et chargés sur le système de fichiers, soit ils peuvent être passés à la
commande en utilisant l'entrée et la sortie standard.

![Diagramme d'application autonome](../../assets/standalone-application-diagram.png)