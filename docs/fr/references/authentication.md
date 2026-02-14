---
title: Authentification
description: Comment s'authentifier à Magenta Security Sign pour signer numériquement des documents hautement confidentiels.
---

# Authentification

La signature de documents, la révocation et l'obtention d'informations utilisateur nécessitent une authentification.
L'authentification est effectuée en passant un jeton d'authentification ou une clé API :

- Les jetons d'accès peuvent être émis par vous ou par un fournisseur OIDC externe. Dans les deux cas, Magenta Security Sign devra enregistrer le fournisseur d'identité.
- Les clés API sont gérées depuis l'application web Magenta Security Sign. Elles ne peuvent être utilisées que pour l'intégration API côté serveur.