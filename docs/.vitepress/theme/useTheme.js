import { ref, computed, onMounted, readonly } from 'vue';
import { themes } from './themes/index.js';
import { inBrowser } from 'vitepress';

const themeKey = ref('certifaction');

function detectTheme() {
  if (!inBrowser) return 'certifaction';

  try {
    // Priority 1: ?theme= query param
    const params = new URLSearchParams(window.location.search);
    const paramTheme = params.get('theme');
    if (paramTheme === 'mss' || paramTheme === 'certifaction') {
      return paramTheme;
    }

    // Priority 2: domain suffix
    const host = window.location.hostname;
    if (host.indexOf('telesec.de') !== -1 || host.indexOf('magenta-security-sign') !== -1) {
      return 'mss';
    }
  } catch (e) {
    // Fallback
  }

  // Priority 3: default
  return 'certifaction';
}

let initialized = false;

export function useTheme() {
  if (!initialized && inBrowser) {
    themeKey.value = detectTheme();
    initialized = true;
  }

  const theme = computed(() => themes[themeKey.value] || themes.certifaction);
  const productName = computed(() => theme.value.productName);
  const productNameShort = computed(() => theme.value.productNameShort);

  function assetPath(filename) {
    return `${theme.value.assetBase}/${filename}`;
  }

  function applyThemeClass() {
    if (!inBrowser) return;
    const html = document.documentElement;
    // Remove all theme classes
    html.classList.remove('theme-certifaction', 'theme-mss');
    // Add active theme class
    html.classList.add(theme.value.cssClass);
  }

  return {
    theme,
    themeKey: readonly(themeKey),
    productName,
    productNameShort,
    assetPath,
    applyThemeClass,
  };
}
