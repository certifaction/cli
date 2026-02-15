import { test, expect } from '@playwright/test';

const themes = [
  { key: 'certifaction', commandName: 'certifaction' },
  { key: 'mss', commandName: 'mss' },
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
      test('displayed file names use correct command name', async ({ page }) => {
        await page.goto(`/en/guides/downloads?theme=${themeConfig.key}`);

        // Wait for theme to apply via client-side hydration
        await expect(page.locator('html')).toHaveClass(new RegExp(`theme-${themeConfig.key}`), { timeout: 5000 });

        // Check that download links show the theme-appropriate command name
        const downloadLinks = page.locator('.downloads-page a[download]');
        const count = await downloadLinks.count();

        if (count > 0) {
          await expect(downloadLinks.first()).toHaveAttribute('download', new RegExp(`^${themeConfig.commandName}_`), { timeout: 5000 });
        }
      });

      test('download attribute contains theme-appropriate filename', async ({ page }) => {
        await page.goto(`/en/guides/downloads?theme=${themeConfig.key}`);
        await expect(page.locator('html')).toHaveClass(new RegExp(`theme-${themeConfig.key}`), { timeout: 5000 });

        const downloadLinks = page.locator('.downloads-page a[download]');
        const count = await downloadLinks.count();

        if (count > 0) {
          for (let i = 0; i < Math.min(count, 3); i++) {
            await expect(downloadLinks.nth(i)).toHaveAttribute('download', new RegExp(`^${themeConfig.commandName}_`), { timeout: 5000 });
          }
        }
      });

      test('actual href links point to shared /downloads/ path', async ({ page }) => {
        await page.goto(`/en/guides/downloads?theme=${themeConfig.key}`);
        await expect(page.locator('html')).toHaveClass(new RegExp(`theme-${themeConfig.key}`), { timeout: 5000 });

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

      test('download page shows correct command name in examples', async ({ page }) => {
        await page.goto(`/en/guides/downloads?theme=${themeConfig.key}`);
        await expect(page.locator('html')).toHaveClass(new RegExp(`theme-${themeConfig.key}`), { timeout: 5000 });

        // Check that code examples on the page use the correct command name
        const codeBlocks = page.locator('pre code');
        const count = await codeBlocks.count();

        if (count > 0) {
          await expect(codeBlocks.first()).toContainText(themeConfig.commandName, { timeout: 5000 });
        }
      });
    });
  }
});
