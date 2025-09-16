---
title: Demander Plusieurs Signatures
description: Comment demander plusieurs signatures numériques de documents hautement confidentiels en utilisant Certifaction
---

# Demander Plusieurs Signatures

Si un document doit être signé par plusieurs signataires, vous devez préparer le document
d'abord ou télécharger le document après avoir créé la première demande de signature et
l'utiliser comme entrée pour la ou les demande(s) de signature suivante(s).

## Préparer un document

Pour préparer un document pour plusieurs demandes de signature,
utilisez le point de terminaison [`/prepare`](../references/api#post-/prepare).

_Exemple :_

```shell
curl --location --request POST 'http://localhost:8082/prepare?scope=sign' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```

## Télécharger un document

Pour télécharger un document, utilisez le point de terminaison [`/download`](../references/api#get-/download).

_Exemple :_

```shell
curl --location --request GET 'http://localhost:8082/download?file=REQUEST_URL' \
--header 'Authorization: PERSONAL_API_KEY'
```

## Demander des signatures

Vous pouvez maintenant demander plusieurs signatures en appelant le point de terminaison [`/request/create`](../references/api#post-/request/create)
pour chaque document préparé.

_Exemple :_

```shell
curl --location --request POST 'http://localhost:8082/request/create?legal-weight=standard&send-email=false&email=demo@mail.com' \
--header 'Authorization: PERSONAL_API_KEY' \
--header 'Content-Type: application/pdf' \
--data-binary 'PATH_TO_DOCUMENT/DOCUMENT.pdf'
```