---
title: Getting Started with the Local API
---

# Getting Started with the Local API

In this section, you sign your first document in a few steps
using the Certifaction Local API:

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

## Step 3: Start the Local API

Start the Local API using one of the following methods.

::: code-group

```shell
certifaction server

```

```docker
docker run -p 8082:8082 certifaction/server:v.X.Y.Z

```

:::

Certifaction API will be exposed on the the default `http://localhost:8082` HTTP server.

## Step 4: Sign your first document

Sign your first PDF document by calling the Local API using HTTP:

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## What next?

For further information about the Local API, please refer to the [Local API Reference](/references/api) or check out the [HowTos](/guides/howto-sign-documents).
