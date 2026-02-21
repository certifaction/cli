---
title: Elaborazione Locale Magenta Security Sign
description: L'elaborazione locale del client Magenta Security Sign e la crittografia E2E protegge i vostri documenti altamente confidenziali
---

# Elaborazione Locale

L'elaborazione locale dei documenti garantisce la riservatezza dei documenti.

Il Client <ProductName/> può essere utilizzato in due modalità:

- Modalità server che espone un'API locale.
- Interattiva per eseguire comandi sulla shell, come parte di uno script o da un'applicazione di terze parti.

In entrambi i casi, il Client <ProductName/> serve come proxy tra l'applicazione di terze parti e l'
API <ProductName/>. Gestisce la firma, certificazione, verifica e revoca dei documenti senza
far trapelare il contenuto del documento al di fuori della vostra infrastruttura IT controllata.

## Eseguire l'API locale su un nodo

In questo scenario, avvierete l'API locale, direttamente
in un nodo o VM, o all'interno di un container Docker. Il Client utilizzerà
HTTP per firmare documenti con la garanzia che i documenti non lascino
l'ambiente locale. Questa è la migliore opzione per firme di documenti centralizzate
dove i documenti vengono firmati durante un flusso di lavoro automatizzato di documenti.

<ThemeImage src="http-server-mode-diagram.png" alt="Diagramma modalità server HTTP" />

## Integrazione applicazione autonoma

Oltre ad essere un'utile utility a riga di comando, il CLI può essere utilizzato da
applicazioni autonome per firmare e certificare documenti con <ProductName/> senza dover
integrare e collegare librerie esterne.

Le applicazioni autonome chiamano il CLI <ProductName/> per firmare documenti sul
file system o utilizzando l'input e l'output standard.

<ThemeImage src="standalone-application-diagram.png" alt="Diagramma applicazione autonoma" />