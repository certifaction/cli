import { test, expect } from '@playwright/test';

const themes = [
  { key: 'certifaction', primaryColor: '#0669f2' },
  { key: 'mss', primaryColor: '#e20074' },
];

test.describe('API Documentation', () => {
  test('API docs page loads', async ({ page }) => {
    await page.goto('/en/references/api');

    const rapiDoc = page.locator('rapi-doc');
    await expect(rapiDoc).toBeVisible({ timeout: 10000 });
  });

  test('Admin API docs load', async ({ page }) => {
    const response = await page.goto('/en/references/admin-api');
    expect(response?.status()).toBe(200);

    const rapiDoc = page.locator('rapi-doc');
    await expect(rapiDoc).toBeVisible({ timeout: 10000 });
  });

  for (const themeConfig of themes) {
    test(`RapiDoc uses ${themeConfig.key} primary color`, async ({ page }) => {
      await page.goto(`/en/references/api?theme=${themeConfig.key}`, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('html')).toHaveClass(new RegExp(`theme-${themeConfig.key}`));

      await page.waitForSelector('rapi-doc', { timeout: 10000 });

      const rapiDoc = page.locator('rapi-doc');
      const primaryColor = await rapiDoc.getAttribute('primary-color');

      expect(primaryColor?.toLowerCase()).toBe(themeConfig.primaryColor);
    });
  }
});
