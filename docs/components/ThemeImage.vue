<script setup>
import { ref, onMounted, watch } from 'vue';
import { useTheme } from '../.vitepress/theme/useTheme.js';

const props = defineProps({ src: String, alt: String });
const { theme } = useTheme();
const imgRef = ref(null);

function updateSrc() {
  if (imgRef.value) {
    imgRef.value.setAttribute('src', `${theme.value.assetBase}/${props.src}`);
  }
}

// Direct DOM update on mount to override SSR-rendered src
onMounted(() => {
  updateSrc();
});

watch(theme, () => {
  updateSrc();
});
</script>

<template>
  <img ref="imgRef" :src="`${theme.assetBase}/${src}`" :alt="alt" />
</template>
