---
title: Request one signature
---

# Request one signature

If want someone else to sign a document, you can use the [`/request/create`](../references/api#post-/request/create) endpoint.
You can also use a document that was already signed by you and use it as the input for a signature request.

_Example:_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```
