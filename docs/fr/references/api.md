---
title: API Locale Certifaction
description: L'API Client Certifaction utilise le traitement local et le chiffrement E2E pour signer numériquement des documents hautement confidentiels.
aside: false
---

<script setup>
  import ApiDoc from "../../components/ApiDoc.vue";
  import specUrl from "./openapi.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>