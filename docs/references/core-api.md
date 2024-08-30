---
title: Certifaction Core-API
description: Certifaction Core-API is the central management system for our digital signing platform, enabling secure handling of users, organizations, roles and others.
aside: false
---

<script setup>
  import ApiDoc from "../components/ApiDoc.vue";
  import specUrl from "./openapi-core.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>
