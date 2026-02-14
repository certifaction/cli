import { test, expect } from '@playwright/test';

const themes = ['certifaction', 'mss'];
const themeProductNames = {
  certifaction: 'Certifaction',
  mss: 'Magenta Security Sign',
};

test.describe('Internationalization', () => {
  const languages = [
    { code: 'en', name: 'English', guideText: 'Guide', refText: 'Reference' },
    { code: 'de', name: 'Deutsch', guideText: 'Anleitung', refText: 'Referenz' },
    { code: 'fr', name: 'Français', guideText: 'Guide', refText: 'Référence' },
    { code: 'it', name: 'Italiano', guideText: 'Guida', refText: 'Riferimento' },
  ];

  for (const lang of languages) {
    test(`${lang.name} (${lang.code}) homepage loads`, async ({ page }) => {
      await page.goto(`/${lang.code}/`);

      const hero = page.locator('.VPHero');
      await expect(hero).toBeVisible();
    });

    test(`${lang.name} navigation structure`, async ({ page, viewport }) => {
      // Skip on mobile viewports
      if (viewport && viewport.width < 768) {
        test.skip();
        return;
      }

      await page.goto(`/${lang.code}/`);

      const guidesNav = page.locator(`.VPNavBarMenuLink >> text="${lang.guideText}"`);
      await expect(guidesNav).toBeVisible();

      const referencesNav = page.locator(`.VPNavBarMenuLink >> text="${lang.refText}"`);
      await expect(referencesNav).toBeVisible();
    });
  }

  test('language parity - about page exists in all languages', async ({ page }) => {
    for (const lang of languages) {
      const response = await page.goto(`/${lang.code}/guides/about`);
      expect(response?.status()).toBe(200);
    }
  });

  // Parameterized brand text tests for both themes
  for (const themeKey of themes) {
    test(`brand text matches ${themeKey} theme`, async ({ page }) => {
      const productName = themeProductNames[themeKey];

      // Test en and de homepages
      for (const lang of languages.slice(0, 2)) {
        await page.goto(`/${lang.code}/?theme=${themeKey}`);

        // Wait for Layout.vue to apply
        await page.waitForTimeout(500);

        const heroName = page.locator('.VPHero .name');
        await expect(heroName).toContainText(productName);
      }
    });
  }

  test('blockchain diagram files are not accessible', async ({ request }) => {
    const blockchainDiagrams = [
      '/assets/document-blockchain-certification-diagram.svg',
      '/assets/document-blockchain-verification-diagram.svg',
    ];

    for (const diagramPath of blockchainDiagrams) {
      const response = await request.get(`http://localhost:4173${diagramPath}`);
      expect(response.status()).toBe(404);
    }
  });
});
