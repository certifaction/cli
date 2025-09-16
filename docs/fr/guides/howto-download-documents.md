---
title: Télécharger des Documents
description: Comment télécharger des documents hautement confidentiels signés numériquement avec Certifaction
---

# Télécharger des Documents

Pour télécharger des documents, utilisez le point de terminaison [`/download`](../references/api#get-/download).

_Exemple :_

```shell
curl --location --request GET 'http://localhost:8082/download?file=REQUEST_URL' \
--header 'Authorization: PERSONAL_API_KEY'
```