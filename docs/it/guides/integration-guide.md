---
title: Guida all'integrazione
description: Una guida base di integrazione passo dopo passo
---

# Guida all'integrazione

1. Scaricate l'[ultimo Client Certifaction](https://github.com/certifaction/cli/releases)

2. Eseguite il Client Certifaction - Opzioni:

   1. Avviate la modalità server tramite riga di comando: `./certifaction server`

   2. Avviate la modalità server tramite container docker: `docker run -p 8082:8082 certifaction/server:v.X.Y.Z`

3. Preparate i documenti:

   1. Endpoint: `POST` [/prepare](https://developers.certifaction.com/references/api#post-/prepare)

   2. Richiesta di esempio:

      ```bash
      curl --location 'http://localhost:8082/prepare?scope=sign&upload=true&digital-twin=true' \
      --header 'Accept-Language: de' \
      --header 'Content-Type: application/pdf' \
      --header 'Authorization: API_KEY' \
      --data-binary '@/INPUT_FILE.pdf'
      ```

        > ℹ️ La risposta conterrà un `FILE_URL` nell'header `location`, che deve essere utilizzato per creare una richiesta di firma.

4. Create una richiesta di firma:

   1. Endpoint: `POST` [/request/create](https://developers.certifaction.com/references/api#post-/request/create)

   2. Richiesta di esempio (per il tipo di firma `SES` senza firma selettiva):

      ```bash
      curl --location 'http://localhost:8082/request/create?send-email=false&email=EMAIL&webhook-url=WEBHOOK_URL' \
      --header 'Accept-Language: de' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: API_KEY' \
      --data '{
        "files": [
          {
            "url": "FILE_URL_1",
            "name": "FILE_NAME_1.pdf"
          },
          {
            "url": "FILE_URL_2",
            "name": "FILE_NAME_2.pdf"
          }
        ]
      }'
      ```

      > ℹ️ La risposta sarà un `request_url`, che deve essere inviato al firmatario.


5. Attendete che il webhook venga chiamato (viene attivato quando i documenti vengono firmati o rifiutati)

6. (Verificate lo stato della richiesta di firma:)

   1. Endpoint: `GET` [/request/status](https://developers.certifaction.com/references/api#post-/request/status)

   2. Richiesta di esempio:

      ```bash
      curl --location 'http://localhost:8082/request/status?request_url=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ Lo `status` degli `envelope_items` deve essere verificato.

7. Scaricate il documento firmato:

   1. Endpoint: `GET` [/download](https://developers.certifaction.com/references/api#get-/download)

   2. Richiesta di esempio:

      ```bash
      curl --location 'http://localhost:8082/download?file=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ Il `request_url` deve essere codificato URL.