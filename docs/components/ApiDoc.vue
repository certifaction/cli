<template>
  <div class="rapidoc-container">
    <rapi-doc
      :spec-url="specUrl"
      ref="rapiDocElement"
      allow-spec-url-load="false"
      allow-spec-file-load="true"
      show-header="false"
      show-info="true"
      font-size="largest"
      render-style="view"
      allow-try="true"
      regular-font="Arial"
      show-method-in-nav-bar="as-colored-block"
      nav-item-spacing="relaxed"
      style="height: 88vh; width: 100%"
    >
    </rapi-doc>
  </div>
</template>

<script setup>
import "rapidoc";
import { computed, ref, watch, onMounted } from "vue";
import { useData } from "vitepress";

const props = defineProps({
  specUrl: {
    type: String,
    required: true,
  },
});

const data = useData();
const isDark = data.isDark;
const rapiDocElement = ref();

onMounted(() => {
  setTheme(isDark.value ? "dark" : "light");
});

watch(isDark, (newValue) => {
  setTheme(newValue ? "dark" : "light");
});

function setTheme(theme) {
  const rapiDocElementInstance = rapiDocElement.value;

  if (!rapiDocElementInstance) {
    return;
  }

  if (theme === "dark") {
    rapiDocElementInstance.setAttribute("theme", "dark");
    rapiDocElementInstance.setAttribute("bg-color", "#1e1e20");
    rapiDocElementInstance.setAttribute("nav-bg-color", "#fafafa");
    rapiDocElementInstance.setAttribute("nav-text-color", "#a9b7d0");
    rapiDocElementInstance.setAttribute("nav-hover-bg-color", "#ffebea");
    rapiDocElementInstance.setAttribute("nav-hover-text-color", "#9b0700");
    rapiDocElementInstance.setAttribute("nav-accent-color", "#f87070");
    rapiDocElementInstance.setAttribute("primary-color", "#F63C41");
  } else if (theme === "light") {
    rapiDocElementInstance.setAttribute("theme", "light");
    rapiDocElementInstance.setAttribute("bg-color", "#ffffff");
    rapiDocElementInstance.setAttribute("nav-bg-color", "#fafafa");
    rapiDocElementInstance.setAttribute("nav-text-color", "#a9b7d0");
    rapiDocElementInstance.setAttribute("nav-hover-bg-color", "#ffebea");
    rapiDocElementInstance.setAttribute("nav-hover-text-color", "#9b0700");
    rapiDocElementInstance.setAttribute("nav-accent-color", "#f87070");
    rapiDocElementInstance.setAttribute("primary-color", "#F63C41");
  }
}
</script>
