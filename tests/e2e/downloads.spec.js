import { test, expect } from '@playwright/test';

const themes = [
  { key: 'certifaction', binaryPrefix: 'certifaction-cli' },
  { key: 'mss', binaryPrefix: 'mss' },
];

test.describe('CLI Downloads', () => {
  test('downloads page is accessible', async ({ page }) => {
    await page.goto('/en/guides/downloads');

    await expect(page).toHaveTitle(/Download|Privacy-first/);
  });

  test('downloads page available in all languages', async ({ page }) => {
    const languages = ['en', 'de', 'fr', 'it'];

    for (const lang of languages) {
      const response = await page.goto(`/${lang}/guides/downloads`);
      expect(response?.status()).toBe(200);
    }
  });

  // Parameterized for both themes
  for (const themeConfig of themes) {
    test.describe(`${themeConfig.key} theme`, () => {
      test('displayed file names use correct binary prefix', async ({ page }) => {
        await page.goto(`/en/guides/downloads?theme=${themeConfig.key}`);

        // Wait for theme to apply
        await page.waitForTimeout(500);

        // Check that download links show the theme-appropriate prefix
        const downloadLinks = page.locator('.downloads-page a[download]');
        const count = await downloadLinks.count();

        if (count > 0) {
          const firstDownloadAttr = await downloadLinks.first().getAttribute('download');
          expect(firstDownloadAttr).toContain(themeConfig.binaryPrefix);
        }
      });

      test('download attribute contains theme-appropriate filename', async ({ page }) => {
        await page.goto(`/en/guides/downloads?theme=${themeConfig.key}`);
        await page.waitForTimeout(500);

        const downloadLinks = page.locator('.downloads-page a[download]');
        const count = await downloadLinks.count();

        if (count > 0) {
          for (let i = 0; i < Math.min(count, 3); i++) {
            const downloadAttr = await downloadLinks.nth(i).getAttribute('download');
            expect(downloadAttr).toContain(`${themeConfig.binaryPrefix}_`);
          }
        }
      });

      test('actual href links point to shared /downloads/ path', async ({ page }) => {
        await page.goto(`/en/guides/downloads?theme=${themeConfig.key}`);
        await page.waitForTimeout(500);

        const downloadLinks = page.locator('.downloads-page a[download]');
        const count = await downloadLinks.count();

        if (count > 0) {
          for (let i = 0; i < Math.min(count, 3); i++) {
            const href = await downloadLinks.nth(i).getAttribute('href');
            // All hrefs should point to /downloads/ with canonical certifaction-cli prefix
            expect(href).toContain('/downloads/');
            expect(href).toContain('certifaction-cli_');
          }
        }
      });
    });
  }
});
