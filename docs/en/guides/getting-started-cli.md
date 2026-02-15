---
title: Getting Started with Magenta Security Sign CLI
description: How to use Magenta Security Sign command line interface to igitally sign highly confidential documents
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Getting Started with the CLI

In this section, you sign your first document in a few steps using the <ProductName/> CLI:

[[toc]]

## Step 1: Generate a personal API key

If you have not created a <ProductName/> account yet, please create one in the
[<ProductName/> web application](https://app.magenta-security-sign.com).

To create a personal API key, please navigate
to the [API key settings page](https://app.magenta-security-sign.com/settings/api-keys)
and follow the instructions.

Please ensure that you copy the key and
store it safely. The key will give any holder the same account rights
as yours. The key is shown only once.

## Step 2: Download the <ProductName/> Client

Please download and install the latest <ProductName/> Client from our [Downloads Page](/downloads/latest/).

## Step 3: Sign your first document

Sign your first PDF document using the following command:

<div class="language-bash"><pre><code>{{ commandName }} --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf</code></pre></div>

## What next?

For further information about the CLI, please refer to the [CLI Reference](/en/references/cli).
