---
title: Per iniziare con l'API locale Certifaction
description: Come utilizzare il Client Certifaction per firmare digitalmente documenti altamente confidenziali
---

# Per iniziare con l'API locale

In questa sezione, firmerete il vostro primo documento in pochi passaggi
utilizzando l'API locale Certifaction:

[[toc]]

## Passaggio 1: Generare una chiave API personale

Se non avete ancora creato un account Certifaction, createne uno nell'
[applicazione web Certifaction](https://app.certifaction.io).

Per creare una chiave API personale, navigate
alla [pagina delle impostazioni delle chiavi API](https://app.certifaction.io/settings/api-keys)
e seguite le istruzioni.

Assicuratevi di copiare la chiave e
archiviarla in modo sicuro. La chiave conferirà a qualsiasi possessore gli stessi diritti dell'account
dei vostri. La chiave viene mostrata solo una volta.

## Passaggio 2: Scaricare il Client Certifaction

Scaricate e installate l'ultimo Client Certifaction dal nostro [repository Github](https://github.com/certifaction/cli/releases/latest).

Non esitate a creare una [Issue](https://github.com/certifaction/cli/issues) se non
trovate un eseguibile per la vostra piattaforma.

## Passaggio 3: Avviare l'API locale

Avviate l'API locale utilizzando uno dei seguenti metodi.

::: code-group

```shell
certifaction server

```

```docker
docker run -p 8082:8082 certifaction/server:v.X.Y.Z

```

:::

L'API Certifaction sarà esposta sul server HTTP predefinito `http://localhost:8082`.

## Passaggio 4: Firmare il vostro primo documento

Firmate il vostro primo documento PDF chiamando l'API locale tramite HTTP:

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## Cosa fare dopo?

Per ulteriori informazioni sull'API locale, fare riferimento al [Riferimento API locale](/it/references/api) o consultare le [Guide pratiche](/it/guides/howto-sign-documents).