import { test, expect } from '@playwright/test';

const themes = [
  { key: 'certifaction', commandName: 'certifaction' },
  { key: 'mss', commandName: 'mss' },
];

/**
 * Navigate to a themed page and wait for the theme to be fully applied.
 * Uses domcontentloaded to avoid blocking on font loads (MSS TeleGroteskNext),
 * then waits for the theme CSS class on <html> plus a short stabilization
 * delay for Vue components to re-render.
 */
async function gotoThemed(page, url, themeKey) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('html')).toHaveClass(new RegExp(`theme-${themeKey}`));
  await page.waitForTimeout(300);
}

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
        await gotoThemed(page, `/en/guides/downloads?theme=${themeConfig.key}`, themeConfig.key);

        // Check that download links show the theme-appropriate command name
        const downloadLinks = page.locator('.downloads-page a[download]');
        const count = await downloadLinks.count();

        if (count > 0) {
          await expect(downloadLinks.first()).toHaveAttribute('download', new RegExp(`^${themeConfig.commandName}_`), { timeout: 5000 });
        }
      });

      test('download attribute contains theme-appropriate filename', async ({ page }) => {
        await gotoThemed(page, `/en/guides/downloads?theme=${themeConfig.key}`, themeConfig.key);

        const downloadLinks = page.locator('.downloads-page a[download]');
        const count = await downloadLinks.count();

        if (count > 0) {
          for (let i = 0; i < Math.min(count, 3); i++) {
            await expect(downloadLinks.nth(i)).toHaveAttribute('download', new RegExp(`^${themeConfig.commandName}_`), { timeout: 5000 });
          }
        }
      });

      test('actual href links point to shared /downloads/ path', async ({ page }) => {
        await gotoThemed(page, `/en/guides/downloads?theme=${themeConfig.key}`, themeConfig.key);

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
        await gotoThemed(page, `/en/guides/downloads?theme=${themeConfig.key}`, themeConfig.key);

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
