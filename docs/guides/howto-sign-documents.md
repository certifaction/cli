---
title: Sign Documents
description: How to digitally sign confidential documents with Certifaction
---

# Sign Documents

To sign a document, you can use the [`/sign`](../references/api#post-/sign) endpoint. The document will be signed in
the name of the owner of the API key. To add another signature, an already signed document
can be used as the input (up to 8 signatures). It is not recommended to use this for
QES signatures.

_Example:_

```shell
curl --location --request POST 'http://localhost:8082/sign?filename=test.pdf' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```
