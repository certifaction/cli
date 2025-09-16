---
title: Come installare il Client Certifaction
description: Come installare il Client Certifaction per firmare digitalmente documenti altamente confidenziali
---

# Installazione

Utilizzate il Client Certifaction per integrare con Certifaction.
L'utilizzo del Client garantisce che i vostri documenti vengano elaborati localmente e non vengano mai inviati
in testo chiaro.

## Requisiti

Il Client Certifaction è distribuito come file eseguibile compatibile con i recenti sistemi operativi Linux,
Windows e macOS e può essere eseguito in un container Docker.

Il Client richiede l'accesso all'API Certifaction e un token di autenticazione per la maggior parte
dei suoi comandi.

Quando si esegue il Client come API locale, l'eseguibile ascolterà le porte HTTP
che devono essere accessibili alle applicazioni client.

## Come installare

Scaricate il Client Certifaction dal nostro [Repository Pubblico](https://github.com/certifaction/cli/releases).

Create una [Issue](https://github.com/certifaction/cli/issues) se non
trovate un eseguibile per la vostra piattaforma.

## Utilizzo

È possibile utilizzare il Client Certifaction come API locale o come CLI.
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

![Diagramma modalità server HTTP](../../assets/http-server-mode-diagram.png)

### Utilizzare il client come interfaccia a riga di comando

<div class="tip custom-block" style="padding-top: 8px">

Volete solo provare il CLI? Saltate alla [Guida rapida CLI](./getting-started-cli).

</div>

Utilizzate il Client come interfaccia a riga di comando (CLI) per l'automazione desktop o per integrare Certifaction
in un'applicazione autonoma.

Le applicazioni autonome possono chiamare direttamente l'eseguibile Certifaction per firmare documenti o richiedere
firme da altre persone.

I documenti possono essere salvati e caricati dal file system, oppure possono essere passati al
comando utilizzando l'input e l'output standard.

![Diagramma applicazione autonoma](../../assets/standalone-application-diagram.png)