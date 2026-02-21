---
title: Per iniziare con il CLI Magenta Security Sign
description: Come utilizzare l'interfaccia a riga di comando Magenta Security Sign per firmare digitalmente documenti altamente confidenziali
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Per iniziare con il CLI

In questa sezione, firmerete il vostro primo documento in pochi passaggi utilizzando il CLI <ProductName/>:

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

## Passaggio 3: Firmare il vostro primo documento

Firmate il vostro primo documento PDF utilizzando il seguente comando:

<div class="language-bash"><pre><code>{{ commandName }} --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf</code></pre></div>

## Cosa fare dopo?

Per ulteriori informazioni sul CLI, fare riferimento al [Riferimento CLI](/it/references/cli).
