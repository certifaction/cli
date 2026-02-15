---
title: Integration guide
description: A basic step by step integration guide
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Integration guide

1. Download the [latest <ProductName/> Client](/downloads/latest/)

2. Run the <ProductName/> Client - Options:

   1. Start server-mode via command line: <code>./{{ commandName }} server</code>

   2. Start server-mode via docker container: <code>docker run -p 8082:8082 {{ commandName }}/server:v.X.Y.Z</code>

3. Prepare documents:

   1. Endpoint: `POST` [/prepare](/en/references/api#post-/prepare)

   2. Example request:

      ```bash
      curl --location 'http://localhost:8082/prepare?scope=sign&upload=true&digital-twin=true' \
      --header 'Accept-Language: de' \
      --header 'Content-Type: application/pdf' \
      --header 'Authorization: API_KEY' \
      --data-binary '@/INPUT_FILE.pdf'
      ```

        > ℹ️ The response will contain a `FILE_URL` in the `location` header, which needs to be used to create a signature request.

4. Create a signature request:

   1. Endpoint: `POST` [/request/create](/en/references/api#post-/request/create)

   2. Example request (for the signature type `SES` without selective signing):

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

      > ℹ️ The response will be a `request_url`, which needs to be sent to the signer.


5. Wait for the webhook to be called (gets triggered when documents are signed or declined)

6. (Check the status of the signature request:)

   1. Endpoint: `GET` [/request/status](/en/references/api#post-/request/status)

   2. Example request:

      ```bash
      curl --location 'http://localhost:8082/request/status?request_url=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ The `status` of the `envelope_items` need to be checked.

7. Download the signed document:

   1. Endpoint: `GET` [/download](/en/references/api#get-/download)

   2. Example request:

      ```bash
      curl --location 'http://localhost:8082/download?file=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ The `request_url` must be URL encoded.
