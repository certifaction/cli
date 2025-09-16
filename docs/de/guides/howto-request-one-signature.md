---
title: Eine Signatur anfordern
description: So fordern Sie die digitale Signatur eines hochvertraulichen Dokuments mit Certifaction an
---

# Eine Signatur anfordern

Wenn Sie möchten, dass jemand anderes ein Dokument signiert, können Sie den [`/request/create`](../references/api#post-/request/create) Endpunkt verwenden.
Sie können auch ein Dokument verwenden, das bereits von Ihnen signiert wurde, und es als Eingabe für eine Signaturanfrage nutzen.

_Beispiel:_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```