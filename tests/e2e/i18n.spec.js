import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  const languages = [
    { code: 'en', name: 'English', guideText: 'Guide', refText: 'Reference' },
    { code: 'de', name: 'Deutsch', guideText: 'Anleitung', refText: 'Referenz' },
    { code: 'fr', name: 'Français', guideText: 'Guide', refText: 'Référence' },
    { code: 'it', name: 'Italiano', guideText: 'Guida', refText: 'Riferimento' },
  ];

  for (const lang of languages) {
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
