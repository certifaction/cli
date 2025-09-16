---
title: Certifaction Local API
description: Certifaction Client API uses local processing and E2E encryption to digitally sign highly confidential documents.
aside: false
---

<script setup>
  import ApiDoc from "../../components/ApiDoc.vue";
  import specUrl from "./openapi.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>
