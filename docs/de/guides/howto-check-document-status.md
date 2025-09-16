---
title: Dokumentstatus prüfen
description: So prüfen Sie den Status von Certifaction-Digitalsignaturen für hochvertrauliche Dokumente
---

# Dokumentstatus prüfen

Um den Status eines Dokuments zu prüfen, verwenden Sie den [`/request/list`](../references/api#post-/request/list) Endpunkt.

_Beispiel:_

```shell
curl --location --request POST 'http://localhost:8082/request/list' \
--header 'Authorization: PERSONAL_API_KEY' \
--form 'url="REQUEST_URL"'
```