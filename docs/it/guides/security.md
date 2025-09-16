---
title: Sicurezza e Privacy Certifaction
description: Le funzioni di sicurezza e privacy della firma digitale Certifaction proteggono documenti altamente confidenziali
---

# Sicurezza e Privacy

Uno dei nostri pilastri principali è la Sicurezza e Privacy delle informazioni dei nostri clienti. Questa sezione evidenzia alcune delle misure di sicurezza specifiche che abbiamo adottato per raggiungere questo obiettivo.

## Crittografia e archiviazione dei documenti

Proteggere la riservatezza, integrità e disponibilità dei dati dei nostri clienti è una priorità importante per noi. A tal fine, impieghiamo la crittografia lato client come misura critica per proteggere i dati sensibili da accessi non autorizzati e violazioni.

La crittografia lato client è un metodo per crittografare i dati prima che vengano trasmessi su una rete o archiviati nel cloud. In questo approccio, la crittografia e decrittografia dei dati vengono eseguite sul lato client, piuttosto che sul lato server, garantendo che solo gli utenti autorizzati con la chiave di decrittografia possano accedere ai dati.

Utilizzando la crittografia lato client, garantiamo che tutti i documenti caricati dai nostri clienti vengano crittografati prima di lasciare il loro dispositivo. Questo riduce il rischio di violazioni dei dati e accessi non autorizzati a informazioni sensibili. Inoltre, poiché le chiavi di crittografia vengono generate e archiviate sul lato client, l'organizzazione non ha accesso al contenuto dei documenti crittografati, fornendo un ulteriore livello di privacy e sicurezza dei dati.

Oltre alla crittografia, abbiamo anche scelto di archiviare i nostri documenti su server svizzeri che sono certificati ISO 27001. Questa certificazione è uno standard ampiamente riconosciuto per la gestione della sicurezza delle informazioni, e ci fornisce una verifica indipendente che i nostri server soddisfano rigorosi requisiti di sicurezza. Questi requisiti includono misure di sicurezza fisica, controlli di accesso, sicurezza di rete e altre misure che aiutano a salvaguardare i nostri dati contro le minacce.

> Sebbene Azure sia il nostro provider cloud, i clienti sono liberi di distribuire la propria istanza di archivio documenti.

## Residenza dei dati svizzera

Siamo impegnati a proteggere la riservatezza e privacy dei dati dei nostri clienti. Come parte di questo impegno, abbiamo implementato una politica rigorosa per l'archiviazione dei documenti che richiede che tutti i documenti vengano archiviati esclusivamente su server basati in Svizzera. La residenza dei dati svizzera è critica per la nostra politica, in quanto offre robuste misure di protezione e privacy dei dati.

L'archiviazione dei nostri documenti su server basati in Svizzera fornisce diversi vantaggi chiave. Primo, la Svizzera è conosciuta per le sue forti leggi e regolamentazioni di protezione dei dati, che forniscono rigorose protezioni di privacy e sicurezza per i dati dei nostri clienti. Secondo, archiviando i nostri dati all'interno della residenza dei dati svizzera, possiamo garantire che sia soggetto ai rigorosi controlli e supervisione delle autorità svizzere, migliorando ulteriormente la sicurezza e privacy dei dati dei nostri clienti.

La nostra politica di archiviare documenti solo su server basati in Svizzera garantisce che i dati dei nostri clienti rimangano in una località che offre il più alto livello di protezione. Prendiamo seriamente la nostra responsabilità di salvaguardare i dati dei nostri clienti e siamo impegnati a rispettare tutte le leggi e regolamentazioni applicabili che governano la protezione e privacy dei dati.

## Server ad alta disponibilità

Impieghiamo server ad alta disponibilità all'interno della nostra piattaforma di cloud computing e manteniamo un piano completo di disaster recovery. Il nostro uso di server ad alta disponibilità garantisce che i nostri sistemi rimangano operativi e accessibili agli utenti, anche in caso di guasti hardware o software, mentre il nostro piano di disaster recovery delinea i passi che intraprenderemo in caso di un'interruzione o guasto maggiore.

> Sebbene Azure sia il nostro provider cloud, i clienti sono liberi di distribuire la propria istanza di archivio documenti.

## Autenticazione a due fattori

Prendiamo molto seriamente la sicurezza degli account dei nostri utenti. Per aiutare a proteggere gli account dei nostri utenti da accessi non autorizzati, offriamo l'autenticazione a due fattori (2FA) come ulteriore livello di sicurezza. Il nostro sistema 2FA è compatibile con tutte le comuni app password temporali monouso (TOTP), inclusi Microsoft Authenticator, Google Authenticator e Duo.

Quando un utente abilita il 2FA sul proprio account, è richiesto di inserire un codice univoco oltre al proprio nome utente e password quando effettua l'accesso. Questo codice è generato da un'app TOTP, come Microsoft Authenticator o Google Authenticator, ed è valido per un tempo limitato. Richiedendo un codice univoco oltre alla password dell'utente, possiamo garantire che solo gli utenti autorizzati siano in grado di accedere ai loro account.

## Valutazioni di sicurezza

Diamo alta priorità alla sicurezza della nostra applicazione e infrastruttura. Per garantire che le nostre misure di sicurezza siano efficaci, conduciamo audit di sicurezza interni ed esterni regolari e test di penetrazione. Questi audit e test di penetrazione vengono condotti almeno una volta all'anno e sono progettati per identificare eventuali vulnerabilità o debolezze nel nostro sistema che potrebbero essere sfruttate da attori malintenzionati.

Gli audit di sicurezza interni sono condotti dal nostro team di sicurezza, che utilizza una varietà di strumenti e tecniche per identificare potenziali problemi di sicurezza. Questi audit sono progettati per testare le nostre misure di sicurezza dalla prospettiva di un insider, simulando le azioni che un attore malintenzionato potrebbe intraprendere se ottenesse accesso al nostro sistema.

Gli audit di sicurezza esterni e i test di penetrazione sono condotti da esperti di sicurezza indipendenti che non sono affiliati con la nostra organizzazione. Questi esperti utilizzano una varietà di strumenti e tecniche per simulare attacchi del mondo reale e identificare potenziali vulnerabilità nel nostro sistema. Conducendo audit esterni e test di penetrazione, possiamo garantire che le nostre misure di sicurezza siano efficaci contro una gamma di minacce e non solo quelle che abbiamo anticipato.

## Non ripudio e auditing

Riconosciamo l'importanza di tenere traccia delle modifiche apportate ai documenti durante tutto il loro ciclo di vita. Per raggiungere questo obiettivo, abbiamo implementato un audit trail completamente immutabile che registra tutte le modifiche apportate a ciascun documento dalla creazione alla cancellazione.

L'audit trail cattura un set completo di metadati per ciascun documento, inclusa la data e ora di ciascuna modifica, l'identità dell'utente che ha apportato la modifica e la natura della modifica. Questi metadati sono archiviati in un log sicuro e a prova di manomissione che non può essere modificato o eliminato.

Mantenendo un audit trail completamente immutabile, possiamo garantire che l'intera storia di ciascun documento sia preservata e possa essere accessibile se necessario. Questo aiuta a mantenere l'integrità dei nostri documenti, fornendo assicurazione che non sono stati manomessi o modificati in modo non autorizzato.

Il nostro audit trail immutabile è un componente essenziale del nostro sistema di gestione documenti, fornendo trasparenza e responsabilità durante tutto il ciclo di vita del documento. Ci aiuta anche a rispettare i requisiti normativi e le best practice del settore, che spesso richiedono alle organizzazioni di mantenere audit trail completi di tutte le attività relative ai documenti.