---
title: Certifaction Lokale API
description: Die Certifaction Client API verwendet lokale Verarbeitung und E2E-Verschlüsselung, um hochvertrauliche Dokumente digital zu signieren.
aside: false
---

<script setup>
  import ApiDoc from "../../components/ApiDoc.vue";
  import specUrl from "./openapi.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>