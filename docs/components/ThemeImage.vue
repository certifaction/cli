<script setup>
import { useTheme } from '../.vitepress/theme/useTheme.js';
const props = defineProps({ src: String, alt: String });
const { theme } = useTheme();
</script>

<template>
  <img :src="`${theme.assetBase}/${src}`" :alt="alt" />
</template>
