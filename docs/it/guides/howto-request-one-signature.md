---
title: Richiedere una firma
description: Come richiedere la firma digitale di un documento altamente confidenziale utilizzando Certifaction
---

# Richiedere una Firma

Se desiderate che qualcun altro firmi un documento, potete utilizzare l'endpoint [`/request/create`](../references/api#post-/request/create).
Potete anche utilizzare un documento che è già stato firmato da voi e utilizzarlo come input per una richiesta di firma.

_Esempio:_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```