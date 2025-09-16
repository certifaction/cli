---
title: Impostazioni Proxy HTTP
description: Come configurare le impostazioni del Proxy HTTP per l'integrazione API Certifaction
---

# Impostazioni Proxy HTTP

Il client Certifaction si integra con l'API Certifaction utilizzando HTTPS.
Se la distribuzione è dietro un proxy dovete configurare il
proxy utilizzando variabili d'ambiente.

Il proxy può essere configurato impostando le variabili `HTTP_PROXY`,
`HTTPS_PROXY` e `NO_PROXY` (o le versioni minuscole).
HTTPS_PROXY ha precedenza su HTTP_PROXY per le richieste https.

I valori delle variabili d'ambiente possono essere un URL completo o un "host[:porta]", in tal caso viene assunto lo schema "http".
Gli schemi "http", "https" e "socks5" sono supportati. Viene restituito un errore se il valore è in una forma diversa.