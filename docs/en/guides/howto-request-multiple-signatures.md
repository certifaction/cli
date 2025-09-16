---
title: Request Multiple Signatures
description: How to request several digital signatures of highly confidential documents using Certifaction
---

# Request Multiple Signatures

If one document needs to be signed by multiple signers, you need to prepare the document
first or download the document after you have created the first signature request and
use it as the input for the subsequent signature request(s).

## Prepare a document

To prepare a document for multiple sitnature requests,
use the [`/prepare`](../references/api#post-/prepare) endpoint.

_Example:_

```shell
curl --location --request POST 'http://localhost:8082/prepare?scope=sign' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```

## Download a document

To download a document, use the [`/download`](../references/api#get-/download) endpoint.

_Example:_

```shell
curl --location --request GET 'http://localhost:8082/download?file=REQUEST_URL' \
--header 'Authorization: PERSONAL_API_KEY'
```

## Request signatures

You can now request multiple signatures by calling the [`/request/create`](../references/api#post-/request/create) endpoint
for each prepared document.

_Example:_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```
