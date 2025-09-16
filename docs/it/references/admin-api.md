---
title: Admin-API Certifaction
description: L'Admin-API Certifaction è il sistema di gestione centrale per la nostra piattaforma di firma digitale, consentendo la gestione sicura di utenti, organizzazioni, ruoli e altro.
aside: false
---

<script setup>
  import ApiDoc from "../../components/ApiDoc.vue";
  import specUrl from "./openapi-admin.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>