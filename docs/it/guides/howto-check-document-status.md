---
title: Verificare lo Stato del Documento
description: Come verificare lo stato della firma digitale Certifaction di documenti altamente confidenziali
---

# Verificare lo Stato del Documento

Per verificare lo stato di un documento, utilizzare l'endpoint [`/request/list`](../references/api#post-/request/list).

_Esempio:_

```shell
curl --location --request POST 'http://localhost:8082/request/list' \
--header 'Authorization: PERSONAL_API_KEY' \
--form 'url="REQUEST_URL"'
```