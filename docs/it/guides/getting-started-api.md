---
title: Per iniziare con l'API locale Magenta Security Sign
description: Come utilizzare il Client Magenta Security Sign per firmare digitalmente documenti altamente confidenziali
---

# Per iniziare con l'API locale

In questa sezione, firmerete il vostro primo documento in pochi passaggi
utilizzando l'API locale <ProductName/>:

[[toc]]

## Passaggio 1: Generare una chiave API personale

Se non avete ancora creato un account <ProductName/>, createne uno nell'
[applicazione web <ProductName/>](https://app.magenta-security-sign.com).

Per creare una chiave API personale, navigate
alla [pagina delle impostazioni delle chiavi API](https://app.magenta-security-sign.com/settings/api-keys)
e seguite le istruzioni.

Assicuratevi di copiare la chiave e
archiviarla in modo sicuro. La chiave conferirà a qualsiasi possessore gli stessi diritti dell'account
dei vostri. La chiave viene mostrata solo una volta.

## Passaggio 2: Scaricare il Client <ProductName/>

Scaricate e installate l'ultimo Client <ProductName/> dalla nostra [Pagina di Download](/downloads/latest/).

## Passaggio 3: Avviare l'API locale

Avviate l'API locale utilizzando uno dei seguenti metodi.

::: code-group

```shell
mss server

```

```docker
docker run -p 8082:8082 mss/server:v.X.Y.Z

```

:::

L'API <ProductName/> sarà esposta sul server HTTP predefinito `http://localhost:8082`.

## Passaggio 4: Firmare il vostro primo documento

Firmate il vostro primo documento PDF chiamando l'API locale tramite HTTP:

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## Cosa fare dopo?

Per ulteriori informazioni sull'API locale, fare riferimento al [Riferimento API locale](/it/references/api) o consultare le [Guide pratiche](/it/guides/howto-sign-documents).