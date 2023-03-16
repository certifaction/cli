---
title: Check document status
---

# Check document status

To check document statuses, use the [`/request/list`](../references/api#post-/request/list) endpoint.

_Example:_

```shell
curl --location --request POST 'http://localhost:8082/request/list' \
--header 'Authorization: PERSONAL_API_KEY' \
--form 'url="REQUEST_URL"'
```
