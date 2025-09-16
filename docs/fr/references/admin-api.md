---
title: API Admin Certifaction
description: L'API Admin Certifaction est le système de gestion central pour notre plateforme de signature numérique, permettant la gestion sécurisée des utilisateurs, organisations, rôles et autres.
aside: false
---

<script setup>
  import ApiDoc from "../../components/ApiDoc.vue";
  import specUrl from "./openapi-admin.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>