---
title: Richiedere Più Firme
description: Come richiedere diverse firme digitali di documenti altamente confidenziali utilizzando Certifaction
---

# Richiedere Più Firme

Se un documento deve essere firmato da più firmatari, è necessario preparare prima il documento
o scaricare il documento dopo aver creato la prima richiesta di firma e
utilizzarlo come input per le successive richieste di firma.

## Preparare un documento

Per preparare un documento per più richieste di firma,
utilizzare l'endpoint [`/prepare`](../references/api#post-/prepare).

_Esempio:_

```shell
curl --location --request POST 'http://localhost:8082/prepare?scope=sign' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```

## Scaricare un documento

Per scaricare un documento, utilizzare l'endpoint [`/download`](../references/api#get-/download).

_Esempio:_

```shell
curl --location --request GET 'http://localhost:8082/download?file=REQUEST_URL' \
--header 'Authorization: PERSONAL_API_KEY'
```

## Richiedere firme

Ora è possibile richiedere più firme chiamando l'endpoint [`/request/create`](../references/api#post-/request/create)
per ciascun documento preparato.

_Esempio:_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```