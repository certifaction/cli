---
title: Signer des Documents
description: Comment signer numériquement des documents confidentiels avec Certifaction
---

# Signer des Documents

Pour signer un document, vous pouvez utiliser le point de terminaison [`/sign`](../references/api#post-/sign). Le document sera signé au
nom du propriétaire de la clé API. Pour ajouter une autre signature, un document déjà signé
peut être utilisé comme entrée (jusqu'à 8 signatures). Il n'est pas recommandé d'utiliser ceci pour
les signatures QES.

_Exemple :_

```shell
curl --location --request POST 'http://localhost:8082/sign?filename=test.pdf' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```