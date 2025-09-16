---
title: Riferimento CLI Certifaction
description: L'interfaccia a riga di comando del Client Certifaction utilizza l'elaborazione locale e la crittografia E2E per firmare digitalmente documenti altamente confidenziali.
---

# Riferimento CLI

[[toc]]

L'interfaccia a riga di comando (CLI) di Certifaction è un strumento conveniente per firmare documenti e
richiedere firme da altri.

## Utilizzo generale

```shell
certifaction [flag certifaction] <comando> [argomenti]
```

## Ottenere aiuto

Utilizzate `certifaction --help` per ottenere l'elenco dei comandi disponibili:

```shell
certifaction --help
Il CLI Certifaction può essere utilizzato in due modalità:
 * Interattiva per eseguire comandi sulla shell, come parte di uno script o da un'applicazione di terze parti.
 * Modalità server che espone endpoint HTTP.

In entrambi i casi, il CLI si posiziona tra l'applicazione di terze parti e l'API Certifaction e gestirà la firma, verifica e revoca dei documenti senza far trapelare il contenuto del documento al di fuori dell'infrastruttura IT controllata del client.

Le due funzioni principali del CLI sono la firma e verifica dei documenti.

Utilizzo:
  certifaction [comando]

Comandi Disponibili:
  certify       Certifica un documento
  delete-access Rimuovi l'accesso Certifaction al file
  download      Scarica e decrittografa il documento dall'archivio digitale
  export        Esporta dati
  generate-keys Genera chiavi di crittografia e una possibile password
  health        Restituisce lo stato di salute dell'API Certifaction
  help          Aiuto su qualsiasi comando
  info          Restituisce i metadati del file fornito
  ping          Ping dell'API Certifaction
  prepare       Prepara un documento per la firma
  qes           QES (Firma Elettronica Qualificata)
  register      registra un documento
  request       Richiedi una firma del documento
  retract       ritira un documento
  revoke        revoca un documento
  server        Avvia in modalità server
  sign          Firma un documento
  user          Restituisce le informazioni dell'utente autenticato
  verify        Verifica un documento

Flag:
      --api string       Sostituisce l'URL API Certifaction predefinito
      --api-key string   La chiave api utilizzata per l'autenticazione
      --env string       Nome ambiente opzionale. Predefinito prod. Configurerà automaticamente l'URL API e gli indirizzi dei contratti Ethereum per un ambiente Certifaction dato.
  -h, --help             aiuto per certifaction
  -t, --token string     Il token di autenticazione
  -v, --verbose count    Aumenta la verbosità dei log. Può essere ripetuto più volte per aumentarla ancora di più.
      --version          versione per certifaction
```

Poi utilizzate `certifaction help <comando>` per ottenere un aiuto più dettagliato per un dato comando, come ad esempio:

```shell
certifaction help help
L'aiuto fornisce aiuto per qualsiasi comando nell'applicazione.
Digitate semplicemente certifaction help [percorso del comando] per i dettagli completi.

Utilizzo:
  certifaction help [comando] [flag]

Flag:
  -h, --help   aiuto per help

Flag Globali:
      --api string       Sostituisce l'URL API Certifaction predefinito
      --api-key string   La chiave api utilizzata per l'autenticazione
      --env string       Nome ambiente opzionale. Predefinito prod. Configurerà automaticamente l'URL API e gli indirizzi dei contratti Ethereum per un ambiente Certifaction dato.
  -t, --token string     Il token di autenticazione
  -v, --verbose count    Aumenta la verbosità dei log. Può essere ripetuto più volte per aumentarla ancora di più.
```