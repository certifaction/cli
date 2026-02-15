<script setup>
import { useTheme } from '../.vitepress/theme/useTheme.js';
const { commandName } = useTheme();
</script>

<template><span>{{ commandName }}</span></template>
