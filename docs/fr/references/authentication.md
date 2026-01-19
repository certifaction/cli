---
title: Authentification
description: Comment s'authentifier à Certifaction pour signer numériquement des documents hautement confidentiels.
---

# Authentification

La signature de documents, la révocation et l'obtention d'informations utilisateur nécessitent une authentification.
L'authentification est effectuée en passant un jeton d'authentification ou une clé API :

- Les jetons d'accès peuvent être émis par vous ou par un fournisseur OIDC externe. Dans les deux cas, Certifaction devra enregistrer le fournisseur d'identité.
- Les clés API sont gérées depuis l'application web Certifaction. Elles ne peuvent être utilisées que pour l'intégration API côté serveur.
- Pour l'authentification HIN Sign, veuillez suivre les instructions :
  - [Allemand](https://cdn.hin.ch/oauth2/manual/DE/index.html)
  - [Anglais](https://cdn.hin.ch/oauth2/manual/EN/index.html)