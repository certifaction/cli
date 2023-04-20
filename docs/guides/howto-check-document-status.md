---
title: Check Document Status
description: How to check the status of Certifaction digital signature of highly confidential documents
---

# Check Document Status

To check the status of a document, use the [`/request/list`](../references/api#post-/request/list) endpoint.

_Example:_

```shell
curl --location --request POST 'http://localhost:8082/request/list' \
--header 'Authorization: PERSONAL_API_KEY' \
--form 'url="REQUEST_URL"'
```
