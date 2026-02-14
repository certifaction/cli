<script setup>
import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useTheme } from './useTheme.js';
import { inBrowser } from 'vitepress';

const { theme, applyThemeClass } = useTheme();

function updateBranding() {
  if (!inBrowser) return;

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
  const logoImgs = document.querySelectorAll('.VPNavBarTitle img.logo, .VPNavBar img.logo');
  logoImgs.forEach(img => {
    // Detect if dark mode
    const isDark = document.documentElement.classList.contains('dark');
    img.src = isDark ? t.logo.dark : t.logo.light;
  });

  // Swap sidebar logo
  const sidebarLogoImgs = document.querySelectorAll('.VPSidebar img.logo');
  sidebarLogoImgs.forEach(img => {
    const isDark = document.documentElement.classList.contains('dark');
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

  // Update social links
  const socialLinksContainer = document.querySelector('.VPSocialLinks');
  if (socialLinksContainer) {
    if (t.socialLinks.length === 0) {
      socialLinksContainer.style.display = 'none';
    } else {
      socialLinksContainer.style.display = '';
    }
  }
}

onMounted(async () => {
  await nextTick();
  updateBranding();

  // Watch for route changes (SPA navigation)
  if (inBrowser) {
    const observer = new MutationObserver(() => {
      updateBranding();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Also update on dark mode toggle
    const darkObserver = new MutationObserver(() => {
      updateBranding();
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
