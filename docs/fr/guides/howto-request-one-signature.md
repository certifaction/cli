---
title: Demander une signature
description: Comment demander la signature numérique d'un document hautement confidentiel en utilisant Certifaction
---

# Demander une Signature

Si vous voulez que quelqu'un d'autre signe un document, vous pouvez utiliser le point de terminaison [`/request/create`](../references/api#post-/request/create).
Vous pouvez également utiliser un document qui a déjà été signé par vous et l'utiliser comme entrée pour une demande de signature.

_Exemple :_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```