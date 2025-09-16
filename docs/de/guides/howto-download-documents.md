---
title: Dokumente herunterladen
description: So laden Sie hochvertrauliche Dokumente herunter, die mit Certifaction digital signiert wurden
---

# Dokumente herunterladen

Um Dokumente herunterzuladen, verwenden Sie den [`/download`](../references/api#get-/download) Endpunkt.

_Beispiel:_

```shell
curl --location --request GET 'http://localhost:8082/download?file=REQUEST_URL' \
--header 'Authorization: PERSONAL_API_KEY'
```