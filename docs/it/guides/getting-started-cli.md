---
title: Per iniziare con il CLI Certifaction
description: Come utilizzare l'interfaccia a riga di comando Certifaction per firmare digitalmente documenti altamente confidenziali
---

# Per iniziare con il CLI

In questa sezione, firmerete il vostro primo documento in pochi passaggi utilizzando il CLI Certifaction:

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

## Passaggio 3: Firmare il vostro primo documento

Firmate il vostro primo documento PDF utilizzando il seguente comando:

::: code-group

```bash
certifaction --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf

```

:::

## Cosa fare dopo?

Per ulteriori informazioni sul CLI, fare riferimento al [Riferimento CLI](/it/references/cli).