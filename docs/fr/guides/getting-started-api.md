---
title: Premiers Pas avec l'API Locale Magenta Security Sign
description: Comment utiliser le Client Magenta Security Sign pour signer numériquement des documents hautement confidentiels
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Premiers Pas avec l'API Locale

Dans cette section, vous signerez votre premier document en quelques étapes
en utilisant l'API Locale <ProductName/> :

[[toc]]

## Étape 1 : Générer une clé API personnelle

Si vous n'avez pas encore créé de compte <ProductName/>, veuillez en créer un dans l'
[application web <ProductName/>](https://app.magenta-security-sign.com).

Pour créer une clé API personnelle, veuillez naviguer
vers la [page des paramètres de clé API](https://app.magenta-security-sign.com/settings/api-keys)
et suivre les instructions.

Veuillez vous assurer de copier la clé et
de la stocker en sécurité. La clé donnera à tout détenteur les mêmes droits de compte
que les vôtres. La clé n'est affichée qu'une seule fois.

## Étape 2 : Télécharger le Client <ProductName/>

Veuillez télécharger et installer le dernier Client <ProductName/> depuis notre [Page de Téléchargements](/downloads/latest/).

## Étape 3 : Démarrer l'API Locale

Démarrez l'API Locale en utilisant une des méthodes suivantes.

<div class="language-shell"><pre><code>{{ commandName }} server</code></pre></div>

<div class="language-docker"><pre><code>docker run -p 8082:8082 {{ commandName }}/server:v.X.Y.Z</code></pre></div>

L'API <ProductName/> sera exposée sur le serveur HTTP par défaut `http://localhost:8082`.

## Étape 4 : Signer votre premier document

Signez votre premier document PDF en appelant l'API Locale via HTTP :

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## Et après ?

Pour plus d'informations sur l'API Locale, veuillez consulter la [Référence de l'API Locale](/fr/references/api) ou consultez les [Guides Pratiques](/fr/guides/howto-sign-documents).
