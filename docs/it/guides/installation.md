---
title: Come installare il Client Magenta Security Sign
description: Come installare il Client Magenta Security Sign per firmare digitalmente documenti altamente confidenziali
---

# Installazione

Utilizzate il Client <ProductName/> per integrare con <ProductName/>.
L'utilizzo del Client garantisce che i vostri documenti vengano elaborati localmente e non vengano mai inviati
in testo chiaro.

## Requisiti

Il Client <ProductName/> è distribuito come file eseguibile compatibile con i recenti sistemi operativi Linux,
Windows e macOS e può essere eseguito in un container Docker.

Il Client richiede l'accesso all'API <ProductName/> e un token di autenticazione per la maggior parte
dei suoi comandi.

Quando si esegue il Client come API locale, l'eseguibile ascolterà le porte HTTP
che devono essere accessibili alle applicazioni client.

## Come installare

Scaricate il Client <ProductName/> dalla nostra pagina [Download](/downloads/).

## Utilizzo

È possibile utilizzare il Client <ProductName/> come API locale o come CLI.
In entrambi i casi, sarete in grado di firmare uno o più documenti e invitare firmatari
esterni.

### Utilizzare il Client come API locale

<div class="tip custom-block" style="padding-top: 8px">

Volete solo provare l'API locale? Saltate alla [Guida rapida API locale](./getting-started-api).

</div>
In questo scenario, avvierete l'API locale, direttamente
in un nodo o VM, o all'interno di un container Docker. Il Client utilizzerà
HTTP per firmare documenti con la garanzia che i documenti non lascino
l'ambiente locale. Questa è la migliore opzione per firme di documenti centralizzate
dove i documenti vengono firmati durante un flusso di lavoro automatizzato di documenti.

<ThemeImage src="http-server-mode-diagram.png" alt="Diagramma modalità server HTTP" />

### Utilizzare il client come interfaccia a riga di comando

<div class="tip custom-block" style="padding-top: 8px">

Volete solo provare il CLI? Saltate alla [Guida rapida CLI](./getting-started-cli).

</div>

Utilizzate il Client come interfaccia a riga di comando (CLI) per l'automazione desktop o per integrare <ProductName/>
in un'applicazione autonoma.

Le applicazioni autonome possono chiamare direttamente l'eseguibile <ProductName/> per firmare documenti o richiedere
firme da altre persone.

I documenti possono essere salvati e caricati dal file system, oppure possono essere passati al
comando utilizzando l'input e l'output standard.

<ThemeImage src="standalone-application-diagram.png" alt="Diagramma applicazione autonoma" />