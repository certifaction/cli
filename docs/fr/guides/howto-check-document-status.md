---
title: Vérifier le Statut d'un Document
description: Comment vérifier le statut de la signature numérique Certifaction de documents hautement confidentiels
---

# Vérifier le Statut d'un Document

Pour vérifier le statut d'un document, utilisez le point de terminaison [`/request/list`](../references/api#post-/request/list).

_Exemple :_

```shell
curl --location --request POST 'http://localhost:8082/request/list' \
--header 'Authorization: PERSONAL_API_KEY' \
--form 'url="REQUEST_URL"'
```