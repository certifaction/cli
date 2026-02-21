<script setup>
import { computed } from 'vue';
import { useTheme } from '../.vitepress/theme/useTheme.js';

const props = defineProps({
  themes: { type: String, required: true },
});

const { themeKey } = useTheme();
const allowed = computed(() => props.themes.split(',').map(t => t.trim()));
const visible = computed(() => allowed.value.includes(themeKey.value));
</script>

<template>
  <div v-if="visible"><slot /></div>
</template>
