---
title: Getting Started with the CLI
---

# Getting Started with the CLI

In this section, you sign your first document in a few steps:

[[toc]]

## Step 1: Generate an API token

If you have not created a Certifaction account yet, please create in
[Certifaction web application](https://app.certifaction.io).

To create an API key, please navigate
to the [API Key setting page](https://app.certifaction.io/settings/api-keys)
and follow the instructions.

Please ensure that you copy the key and
store it safely. The key will give any holder the same account rights
as yours. The key is shown only once.

## Step 2: Download the latest CLI tool

Please download and install the latest CLI tool release from our [Github repository](https://github.com/certifaction/cli/releases/latest).

Do not hesitate to create an [Issue](https://github.com/certifaction/cli/issues) if you do
not find an executable for your platform.

## Step 3: Sign your first document

Sign your first PDF document using the following command:

::: code-group

```bash
certifaction --api-key <your API key> sign -o document-signer.pdf document.pdf

```

:::

## What next?

For further information about the CLI, please refer to the [CLI Reference](/references/cli)
