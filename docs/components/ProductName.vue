<script setup>
import { useTheme } from '../.vitepress/theme/useTheme.js';
const { productName } = useTheme();
</script>

<template>
  <span>{{ productName }}</span>
</template>
