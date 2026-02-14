---
title: Riferimento CLI Magenta Security Sign
description: L'interfaccia a riga di comando del Client Magenta Security Sign utilizza l'elaborazione locale e la crittografia E2E per firmare digitalmente documenti altamente confidenziali.
---

# Riferimento CLI

[[toc]]

L'interfaccia a riga di comando (CLI) di <ProductName/> è un strumento conveniente per firmare documenti e
richiedere firme da altri.

## Utilizzo generale

```shell
mss [flag mss] <comando> [argomenti]
```

## Ottenere aiuto

Utilizzate `mss --help` per ottenere l'elenco dei comandi disponibili:

```shell
mss --help
Il CLI Magenta Security Sign può essere utilizzato in due modalità:
 * Interattiva per eseguire comandi sulla shell, come parte di uno script o da un'applicazione di terze parti.
 * Modalità server che espone endpoint HTTP.

In entrambi i casi, il CLI si posiziona tra l'applicazione di terze parti e l'API Magenta Security Sign e gestirà la firma, verifica e revoca dei documenti senza far trapelare il contenuto del documento al di fuori dell'infrastruttura IT controllata del client.

Le due funzioni principali del CLI sono la firma e verifica dei documenti.

Utilizzo:
  mss [comando]

Comandi Disponibili:
  certify       Certifica un documento
  delete-access Rimuovi l'accesso Magenta Security Sign al file
  download      Scarica e decrittografa il documento dall'archivio digitale
  export        Esporta dati
  generate-keys Genera chiavi di crittografia e una possibile password
  health        Restituisce lo stato di salute dell'API Magenta Security Sign
  help          Aiuto su qualsiasi comando
  info          Restituisce i metadati del file fornito
  ping          Ping dell'API Magenta Security Sign
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
      --api string       Sostituisce l'URL API Magenta Security Sign predefinito
      --api-key string   La chiave api utilizzata per l'autenticazione
      --env string       Nome ambiente opzionale. Predefinito prod. Configurerà automaticamente l'URL API e gli indirizzi dei contratti Ethereum per un ambiente Magenta Security Sign dato.
  -h, --help             aiuto per mss
  -t, --token string     Il token di autenticazione
  -v, --verbose count    Aumenta la verbosità dei log. Può essere ripetuto più volte per aumentarla ancora di più.
      --version          versione per mss
```

Poi utilizzate `mss help <comando>` per ottenere un aiuto più dettagliato per un dato comando, come ad esempio:

```shell
mss help help
L'aiuto fornisce aiuto per qualsiasi comando nell'applicazione.
Digitate semplicemente mss help [percorso del comando] per i dettagli completi.

Utilizzo:
  mss help [comando] [flag]

Flag:
  -h, --help   aiuto per help

Flag Globali:
      --api string       Sostituisce l'URL API Magenta Security Sign predefinito
      --api-key string   La chiave api utilizzata per l'autenticazione
      --env string       Nome ambiente opzionale. Predefinito prod. Configurerà automaticamente l'URL API e gli indirizzi dei contratti Ethereum per un ambiente Magenta Security Sign dato.
  -t, --token string     Il token di autenticazione
  -v, --verbose count    Aumenta la verbosità dei log. Può essere ripetuto più volte per aumentarla ancora di più.
```