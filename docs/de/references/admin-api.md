---
title: Certifaction Admin-API
description: Die Certifaction Admin-API ist das zentrale Managementsystem für unsere digitale Signaturplattform und ermöglicht die sichere Verwaltung von Benutzern, Organisationen, Rollen und anderen.
aside: false
---

<script setup>
  import ApiDoc from "../../components/ApiDoc.vue";
  import specUrl from "./openapi-admin.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>