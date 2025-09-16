---
title: Integrationsleitfaden
description: Eine grundlegende Schritt-für-Schritt-Anleitung zur Integration
---

# Integrationsleitfaden

1. Laden Sie den [neuesten Certifaction-Client](https://github.com/certifaction/cli/releases) herunter

2. Führen Sie den Certifaction-Client aus - Optionen:

   1. Server-Modus über Kommandozeile starten: `./certifaction server`

   2. Server-Modus über Docker-Container starten: `docker run -p 8082:8082 certifaction/server:v.X.Y.Z`

3. Dokumente vorbereiten:

   1. Endpunkt: `POST` [/prepare](https://developers.certifaction.com/de/references/api#post-/prepare)

   2. Beispielanfrage:

      ```bash
      curl --location 'http://localhost:8082/prepare?scope=sign&upload=true&digital-twin=true' \
      --header 'Accept-Language: de' \
      --header 'Content-Type: application/pdf' \
      --header 'Authorization: API_KEY' \
      --data-binary '@/INPUT_FILE.pdf'
      ```

        > ℹ️ Die Antwort enthält eine `FILE_URL` im `location`-Header, die zur Erstellung einer Signaturanfrage benötigt wird.

4. Eine Signaturanfrage erstellen:

   1. Endpunkt: `POST` [/request/create](https://developers.certifaction.com/de/references/api#post-/request/create)

   2. Beispielanfrage (für den Signaturtyp `SES` ohne selektives Signieren):

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

      > ℹ️ Die Antwort ist eine `request_url`, die an den Unterzeichner gesendet werden muss.


5. Warten Sie darauf, dass der Webhook aufgerufen wird (wird ausgelöst, wenn Dokumente signiert oder abgelehnt werden)

6. (Den Status der Signaturanfrage prüfen:)

   1. Endpunkt: `GET` [/request/status](https://developers.certifaction.com/de/references/api#post-/request/status)

   2. Beispielanfrage:

      ```bash
      curl --location 'http://localhost:8082/request/status?request_url=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ Der `status` der `envelope_items` muss überprüft werden.

7. Das signierte Dokument herunterladen:

   1. Endpunkt: `GET` [/download](https://developers.certifaction.com/de/references/api#get-/download)

   2. Beispielanfrage:

      ```bash
      curl --location 'http://localhost:8082/download?file=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ Die `request_url` muss URL-kodiert sein.