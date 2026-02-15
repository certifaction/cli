---
title: Guide d'intégration
description: Un guide d'intégration étape par étape de base
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Guide d'intégration

1. Téléchargez le [dernier Client <ProductName/>](/downloads/latest/)

2. Exécutez le Client <ProductName/> - Options :

   1. Démarrez le mode serveur via la ligne de commande : <code>./{{ commandName }} server</code>

   2. Démarrez le mode serveur via un conteneur docker : <code>docker run -p 8082:8082 {{ commandName }}/server:v.X.Y.Z</code>

3. Préparez les documents :

   1. Point de terminaison : `POST` [/prepare](/fr/references/api#post-/prepare)

   2. Exemple de requête :

      ```bash
      curl --location 'http://localhost:8082/prepare?scope=sign&upload=true&digital-twin=true' \
      --header 'Accept-Language: fr' \
      --header 'Content-Type: application/pdf' \
      --header 'Authorization: API_KEY' \
      --data-binary '@/INPUT_FILE.pdf'
      ```

        > ℹ️ La réponse contiendra une `FILE_URL` dans l'en-tête `location`, qui doit être utilisée pour créer une demande de signature.

4. Créez une demande de signature :

   1. Point de terminaison : `POST` [/request/create](/fr/references/api#post-/request/create)

   2. Exemple de requête (pour le type de signature `SES` sans signature sélective) :

      ```bash
      curl --location 'http://localhost:8082/request/create?send-email=false&email=EMAIL&webhook-url=WEBHOOK_URL' \
      --header 'Accept-Language: fr' \
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

      > ℹ️ La réponse sera une `request_url`, qui doit être envoyée au signataire.


5. Attendez que le webhook soit appelé (se déclenche quand les documents sont signés ou refusés)

6. (Vérifiez le statut de la demande de signature :)

   1. Point de terminaison : `GET` [/request/status](/fr/references/api#post-/request/status)

   2. Exemple de requête :

      ```bash
      curl --location 'http://localhost:8082/request/status?request_url=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ Le `status` des `envelope_items` doit être vérifié.

7. Téléchargez le document signé :

   1. Point de terminaison : `GET` [/download](/fr/references/api#get-/download)

   2. Exemple de requête :

      ```bash
      curl --location 'http://localhost:8082/download?file=REQUEST_URL' \
      --header 'Authorization: API_KEY'
      ```

      > ℹ️ La `request_url` doit être encodée en URL.
