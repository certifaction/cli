<script setup>
import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useTheme } from './useTheme.js';
import { useRouter, inBrowser } from 'vitepress';

const { theme, applyThemeClass } = useTheme();
const router = useRouter();

let updating = false;

function updateBranding() {
  if (!inBrowser || updating) return;
  updating = true;

  try {
    const t = theme.value;

    // Apply CSS class
    applyThemeClass();

    // Swap favicon
    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.type = t.faviconType;
    faviconLink.href = t.favicon;

    // Swap navbar logo
    const isDark = document.documentElement.classList.contains('dark');
    const logoImgs = document.querySelectorAll('.VPNavBarTitle img.logo, .VPNavBar img.logo');
    logoImgs.forEach(img => {
      img.src = isDark ? t.logo.dark : t.logo.light;
    });

    // Swap sidebar logo
    const sidebarLogoImgs = document.querySelectorAll('.VPSidebar img.logo');
    sidebarLogoImgs.forEach(img => {
      img.src = isDark ? t.logo.dark : t.logo.light;
    });

    // Update footer copyright
    const footerCopyright = document.querySelector('.VPFooter .copyright');
    if (footerCopyright) {
      footerCopyright.textContent = t.footer;
    }

    // Swap hero name and image
    const heroName = document.querySelector('.VPHero .name');
    if (heroName) {
      heroName.textContent = t.productName;
    }

    const heroImg = document.querySelector('.VPHero .VPImage');
    if (heroImg) {
      heroImg.src = t.heroImage;
      heroImg.alt = `${t.productName} CLI`;
    }

    // Swap product names in feature cards (frontmatter-generated, can't use Vue components)
    const allProductNames = ['Magenta Security Sign', 'Certifaction'];
    document.querySelectorAll('.VPFeature .title, .VPFeature .details').forEach(el => {
      for (const name of allProductNames) {
        if (name !== t.productName && el.textContent.includes(name)) {
          el.textContent = el.textContent.replaceAll(name, t.productName);
        }
      }
    });

    // Update document title
    if (document.title) {
      for (const name of allProductNames) {
        if (name !== t.productName && document.title.includes(name)) {
          document.title = document.title.replaceAll(name, t.productName);
        }
      }
    }

    // Update social links
    const socialLinksContainer = document.querySelector('.VPSocialLinks');
    if (socialLinksContainer) {
      if (t.socialLinks.length === 0) {
        socialLinksContainer.style.display = 'none';
      } else {
        socialLinksContainer.style.display = '';
      }
    }
  } finally {
    updating = false;
  }
}

onMounted(async () => {
  await nextTick();
  updateBranding();

  if (inBrowser) {
    // Use VitePress router for SPA navigation
    router.onAfterRouteChanged = () => {
      nextTick(() => updateBranding());
    };

    // Watch for dark mode toggle — track state to avoid loops from theme class changes
    let lastDarkState = document.documentElement.classList.contains('dark');
    const darkObserver = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark !== lastDarkState) {
        lastDarkState = isDark;
        updateBranding();
      }
    });
    darkObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
});

watch(theme, async () => {
  await nextTick();
  updateBranding();
});
</script>

<template>
  <DefaultTheme.Layout />
</template>
