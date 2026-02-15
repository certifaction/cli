---
title: Premiers Pas avec le CLI Magenta Security Sign
description: Comment utiliser l'interface en ligne de commande Magenta Security Sign pour signer numériquement des documents hautement confidentiels
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Premiers Pas avec le CLI

Dans cette section, vous signerez votre premier document en quelques étapes en utilisant le CLI <ProductName/> :

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

## Étape 3 : Signer votre premier document

Signez votre premier document PDF en utilisant la commande suivante :

<div class="language-bash"><pre><code>{{ commandName }} --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf</code></pre></div>

## Et après ?

Pour plus d'informations sur le CLI, veuillez consulter la [Référence CLI](/fr/references/cli).
