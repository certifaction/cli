---
title: Premiers Pas avec le CLI Certifaction
description: Comment utiliser l'interface en ligne de commande Certifaction pour signer numériquement des documents hautement confidentiels
---

# Premiers Pas avec le CLI

Dans cette section, vous signerez votre premier document en quelques étapes en utilisant le CLI Certifaction :

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

## Étape 3 : Signer votre premier document

Signez votre premier document PDF en utilisant la commande suivante :

::: code-group

```bash
certifaction --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf

```

:::

## Et après ?

Pour plus d'informations sur le CLI, veuillez consulter la [Référence CLI](/fr/references/cli).