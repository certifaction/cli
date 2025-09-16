---
title: Firmare Documenti
description: Come firmare digitalmente documenti confidenziali con Certifaction
---

# Firmare Documenti

Per firmare un documento, è possibile utilizzare l'endpoint [`/sign`](../references/api#post-/sign). Il documento verrà firmato a
nome del proprietario della chiave API. Per aggiungere un'altra firma, un documento già firmato
può essere utilizzato come input (fino a 8 firme). Non è raccomandato utilizzarlo per
firme QES.

_Esempio:_

```shell
curl --location --request POST 'http://localhost:8082/sign?filename=test.pdf' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```