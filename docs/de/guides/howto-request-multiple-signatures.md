---
title: Mehrere Signaturen anfordern
description: So fordern Sie mehrere digitale Signaturen für hochvertrauliche Dokumente mit Certifaction an
---

# Mehrere Signaturen anfordern

Wenn ein Dokument von mehreren Unterzeichnern signiert werden muss, müssen Sie das Dokument
zuerst vorbereiten oder das Dokument nach der Erstellung der ersten Signaturanfrage herunterladen und
es als Eingabe für die nachfolgenden Signaturanfrage(n) verwenden.

## Ein Dokument vorbereiten

Um ein Dokument für mehrere Signaturanfragen vorzubereiten,
verwenden Sie den [`/prepare`](../references/api#post-/prepare) Endpunkt.

_Beispiel:_

```shell
curl --location --request POST 'http://localhost:8082/prepare?scope=sign' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```

## Ein Dokument herunterladen

Um ein Dokument herunterzuladen, verwenden Sie den [`/download`](../references/api#get-/download) Endpunkt.

_Beispiel:_

```shell
curl --location --request GET 'http://localhost:8082/download?file=REQUEST_URL' \
--header 'Authorization: PERSONAL_API_KEY'
```

## Signaturen anfordern

Sie können jetzt mehrere Signaturen anfordern, indem Sie den [`/request/create`](../references/api#post-/request/create) Endpunkt
für jedes vorbereitete Dokument aufrufen.

_Beispiel:_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```