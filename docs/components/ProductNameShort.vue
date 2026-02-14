<script setup>
import { useTheme } from '../.vitepress/theme/useTheme.js';
const { productNameShort } = useTheme();
</script>

<template>
  <span>{{ productNameShort }}</span>
</template>
