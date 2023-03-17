---
title: Getting Started with the CLI
---

# Getting Started with the CLI

In this section, you sign your first document in a few steps using the Certifaction CLI:

[[toc]]

## Step 1: Generate a personal API key

If you have not created a Certifaction account yet, please create one in the
[Certifaction web application](https://app.certifaction.io).

To create a personal API key, please navigate
to the [API key settings page](https://app.certifaction.io/settings/api-keys)
and follow the instructions.

Please ensure that you copy the key and
store it safely. The key will give any holder the same account rights
as yours. The key is shown only once.

## Step 2: Download the Certifaction client

Please download and install the latest Certifaction client from our [Github repository](https://github.com/certifaction/cli/releases/latest).

Do not hesitate to create an [Issue](https://github.com/certifaction/cli/issues) if you do
not find an executable for your platform.

## Step 3: Sign your first document

Sign your first PDF document using the following command:

::: code-group

```bash
certifaction --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf

```

:::

## What next?

For further information about the CLI, please refer to the [CLI Reference](/references/cli).
