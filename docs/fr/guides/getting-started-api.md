---
title: Premiers Pas avec l'API Locale Certifaction
description: Comment utiliser le Client Certifaction pour signer numériquement des documents hautement confidentiels
---

# Premiers Pas avec l'API Locale

Dans cette section, vous signerez votre premier document en quelques étapes
en utilisant l'API Locale Certifaction :

[[toc]]

## Étape 1 : Générer une clé API personnelle

Si vous n'avez pas encore créé de compte Certifaction, veuillez en créer un dans l'
[application web Certifaction](https://app.certifaction.io).

Pour créer une clé API personnelle, veuillez naviguer
vers la [page des paramètres de clé API](https://app.certifaction.io/settings/api-keys)
et suivre les instructions.

Veuillez vous assurer de copier la clé et
de la stocker en sécurité. La clé donnera à tout détenteur les mêmes droits de compte
que les vôtres. La clé n'est affichée qu'une seule fois.

## Étape 2 : Télécharger le Client Certifaction

Veuillez télécharger et installer le dernier Client Certifaction depuis notre [dépôt Github](https://github.com/certifaction/cli/releases/latest).

N'hésitez pas à créer une [Issue](https://github.com/certifaction/cli/issues) si vous ne
trouvez pas d'exécutable pour votre plateforme.

## Étape 3 : Démarrer l'API Locale

Démarrez l'API Locale en utilisant une des méthodes suivantes.

::: code-group

```shell
certifaction server

```

```docker
docker run -p 8082:8082 certifaction/server:v.X.Y.Z

```

:::

L'API Certifaction sera exposée sur le serveur HTTP par défaut `http://localhost:8082`.

## Étape 4 : Signer votre premier document

Signez votre premier document PDF en appelant l'API Locale via HTTP :

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## Et après ?

Pour plus d'informations sur l'API Locale, veuillez consulter la [Référence de l'API Locale](/fr/references/api) ou consultez les [Guides Pratiques](/fr/guides/howto-sign-documents).