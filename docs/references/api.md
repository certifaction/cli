---
title: Local API
aside: false
---

<script setup>
  import ApiDoc from "../components/ApiDoc.vue";
  import specUrl from "./openapi.yaml?url";
</script>

<ClientOnly>
   <ApiDoc :specUrl="specUrl"/>
</ClientOnly>
