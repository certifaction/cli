---
title: Getting Started with Magenta Security Sign Local API
description: How to use Magenta Security Sign Client to digitally sign highly confidential documents
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Getting Started with the Local API

In this section, you sign your first document in a few steps
using the <ProductName/> Local API:

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

## Step 3: Start the Local API

Start the Local API using one of the following methods.

<div class="language-shell"><pre><code>{{ commandName }} server</code></pre></div>

<div class="language-docker"><pre><code>docker run -p 8082:8082 {{ commandName }}/server:v.X.Y.Z</code></pre></div>

<ProductName/> API will be exposed on the the default `http://localhost:8082` HTTP server.

## Step 4: Sign your first document

Sign your first PDF document by calling the Local API using HTTP:

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## What next?

For further information about the Local API, please refer to the [Local API Reference](/en/references/api) or check out the [HowTos](/en/guides/howto-sign-documents).
