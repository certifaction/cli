---
title: Dokumente signieren
description: So signieren Sie vertrauliche Dokumente digital mit Certifaction
---

# Dokumente signieren

Um ein Dokument zu signieren, können Sie den [`/sign`](../references/api#post-/sign) Endpunkt verwenden. Das Dokument wird im
Namen des Besitzers des API-Schlüssels signiert. Um eine weitere Signatur hinzuzufügen, kann ein bereits signiertes Dokument
als Eingabe verwendet werden (bis zu 8 Signaturen). Es wird nicht empfohlen, dies für
QES-Signaturen zu verwenden.

_Beispiel:_

```shell
curl --location --request POST 'http://localhost:8082/sign?filename=test.pdf' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```