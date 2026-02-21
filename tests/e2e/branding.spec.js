import { test, expect } from '@playwright/test';

const themeConfigs = [
  {
    key: 'certifaction',
    productName: 'Certifaction',
    primaryColor: '#0669f2',
    footer: 'Certifaction AG',
    logoPath: '/themes/certifaction/logo',
    faviconPath: '/themes/certifaction/favicon',
    hasSocialLinks: true,
    hasCustomFont: false,
    defaultLanguage: 'en',
  },
  {
    key: 'mss',
    productName: 'Magenta Security Sign',
    primaryColor: '#e20074',
    footer: 'Deutsche Telekom Security GmbH',
    logoPath: '/themes/mss/logo',
    faviconPath: '/themes/mss/favicon',
    hasSocialLinks: false,
    hasCustomFont: true,
    fontFamily: 'TeleGroteskNext',
    defaultLanguage: 'de',
  },
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

for (const themeConfig of themeConfigs) {
  test.describe(`${themeConfig.productName} Branding (theme=${themeConfig.key})`, () => {
    test('logo src contains theme-specific path', async ({ page, viewport }) => {
      // Skip on mobile - logo is hidden
      if (viewport && viewport.width < 640) {
        test.skip();
        return;
      }

      await gotoThemed(page, `/en/?theme=${themeConfig.key}`, themeConfig.key);

      const logo = page.locator('.VPNavBarTitle img').first();
      const src = await logo.getAttribute('src');
      expect(src).toContain(themeConfig.logoPath);
    });

    test('brand color variables correct', async ({ page }) => {
      await gotoThemed(page, `/en/guides/about?theme=${themeConfig.key}`, themeConfig.key);

      const root = page.locator('html');
      const brandColor = await root.evaluate((el) => {
        const style = getComputedStyle(el);
        return style.getPropertyValue('--vp-c-brand-1') ||
               style.getPropertyValue('--vp-c-brand');
      });

      const colorLower = brandColor.toLowerCase().trim();
      expect(colorLower).toContain(themeConfig.primaryColor);
    });

    test('footer copyright matches theme', async ({ page }) => {
      await gotoThemed(page, `/en/?theme=${themeConfig.key}`, themeConfig.key);

      const footer = await page.textContent('footer');
      expect(footer).toContain(themeConfig.footer);
    });

    test('favicon link href matches theme', async ({ page }) => {
      await gotoThemed(page, `/en/?theme=${themeConfig.key}`, themeConfig.key);

      const favicon = page.locator('link[rel="icon"]');
      const href = await favicon.getAttribute('href');
      expect(href).toContain(themeConfig.faviconPath);
    });

    if (themeConfig.hasCustomFont) {
      test('TeleGroteskNext font loaded and applied', async ({ page }) => {
        await gotoThemed(page, `/en/?theme=${themeConfig.key}`, themeConfig.key);

        const body = page.locator('body');
        const fontFamily = await body.evaluate((el) =>
          getComputedStyle(el).fontFamily
        );

        expect(fontFamily).toContain(themeConfig.fontFamily);
      });
    }

    test('footer visible on guide pages with sidebar', async ({ page }) => {
      await gotoThemed(page, `/en/guides/about?theme=${themeConfig.key}`, themeConfig.key);

      const footer = page.locator('.VPFooter');
      await expect(footer).toBeVisible();

      const footerText = await footer.textContent();
      expect(footerText).toContain(themeConfig.footer);
    });

    test('root redirect preserves theme query parameter', async ({ browser }) => {
      const context = await browser.newContext({ locale: 'en' });
      const page = await context.newPage();

      await page.goto(`/?theme=${themeConfig.key}`, { waitUntil: 'domcontentloaded' });

      // Wait for redirect to a localized path
      await page.waitForURL('**/en/**', { timeout: 10000 });

      // The theme query parameter must survive the redirect
      const url = new URL(page.url());
      expect(url.searchParams.get('theme')).toBe(themeConfig.key);

      await context.close();
    });

    test('default language redirect for unsupported browser locale', async ({ browser }) => {
      // Use Japanese locale (unsupported) to force fallback to theme default
      const context = await browser.newContext({ locale: 'ja' });
      const page = await context.newPage();

      await page.goto(`/?theme=${themeConfig.key}`, { waitUntil: 'domcontentloaded' });

      // Wait for redirect to the expected default language
      await page.waitForURL(`**/${themeConfig.defaultLanguage}/**`, { timeout: 10000 });

      expect(page.url()).toContain(`/${themeConfig.defaultLanguage}/`);

      await context.close();
    });

    test('HIN Sign content visibility per theme', async ({ page }) => {
      await gotoThemed(page, `/en/references/authentication?theme=${themeConfig.key}`, themeConfig.key);

      const content = page.locator('.vp-doc');
      await expect(content).toBeVisible();

      if (themeConfig.key === 'certifaction') {
        await expect(content).toContainText('HIN Sign');
        await expect(page.locator('a[href="https://cdn.hin.ch/oauth2/manual/EN/index.html"]')).toBeVisible();
      } else {
        await expect(content).not.toContainText('HIN Sign');
        await expect(page.locator('a[href="https://cdn.hin.ch/oauth2/manual/EN/index.html"]')).toHaveCount(0);
      }
    });

  });
}
