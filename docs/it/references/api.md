---
title: API locale Certifaction
description: L'API del Client Certifaction utilizza l'elaborazione locale e la crittografia E2E per firmare digitalmente documenti altamente confidenziali.
aside: false
---

<script setup>
  import ApiDoc from "../../components/ApiDoc.vue";
  import specUrl from "./openapi.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>