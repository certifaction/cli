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

for (const themeConfig of themeConfigs) {
  test.describe(`${themeConfig.productName} Branding (theme=${themeConfig.key})`, () => {
    test('hero title matches product name', async ({ page }) => {
      await page.goto(`/en/?theme=${themeConfig.key}`);

      const heroName = page.locator('.VPHero .name');
      await expect(heroName).toContainText(themeConfig.productName);
    });

    test('logo src contains theme-specific path', async ({ page, viewport }) => {
      // Skip on mobile - logo is hidden
      if (viewport && viewport.width < 640) {
        test.skip();
        return;
      }

      await page.goto(`/en/?theme=${themeConfig.key}`);

      // Wait for Layout.vue to apply branding
      await page.waitForTimeout(500);

      const logo = page.locator('.VPNavBarTitle img').first();
      const src = await logo.getAttribute('src');
      expect(src).toContain(themeConfig.logoPath);
    });

    test('brand color variables correct', async ({ page }) => {
      await page.goto(`/en/guides/about?theme=${themeConfig.key}`);

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
      await page.goto(`/en/?theme=${themeConfig.key}`);

      // Wait for Layout.vue to update footer
      await page.waitForTimeout(500);

      const footer = await page.textContent('footer');
      expect(footer).toContain(themeConfig.footer);
    });

    test('favicon link href matches theme', async ({ page }) => {
      await page.goto(`/en/?theme=${themeConfig.key}`);

      const favicon = page.locator('link[rel="icon"]');
      const href = await favicon.getAttribute('href');
      expect(href).toContain(themeConfig.faviconPath);
    });

    if (themeConfig.hasCustomFont) {
      test('TeleGroteskNext font loaded and applied', async ({ page }) => {
        await page.goto(`/en/?theme=${themeConfig.key}`);

        const body = page.locator('body');
        const fontFamily = await body.evaluate((el) =>
          getComputedStyle(el).fontFamily
        );

        expect(fontFamily).toContain(themeConfig.fontFamily);
      });
    }

    test('footer visible on guide pages with sidebar', async ({ page }) => {
      await page.goto(`/en/guides/about?theme=${themeConfig.key}`);

      await page.waitForTimeout(500);

      const footer = page.locator('.VPFooter');
      await expect(footer).toBeVisible();

      const footerText = await footer.textContent();
      expect(footerText).toContain(themeConfig.footer);
    });

    test('root redirect preserves theme query parameter', async ({ browser }) => {
      const context = await browser.newContext({ locale: 'en' });
      const page = await context.newPage();

      await page.goto(`/?theme=${themeConfig.key}`);

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

      await page.goto(`/?theme=${themeConfig.key}`);

      // Wait for redirect to the expected default language
      await page.waitForURL(`**/${themeConfig.defaultLanguage}/**`, { timeout: 10000 });

      expect(page.url()).toContain(`/${themeConfig.defaultLanguage}/`);

      await context.close();
    });

    test('HIN Sign content visibility per theme', async ({ page }) => {
      await page.goto(`/en/references/authentication?theme=${themeConfig.key}`);

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

    test('no cross-theme branding leaks', async ({ page }) => {
      await page.goto(`/en/?theme=${themeConfig.key}`);

      // Wait for Layout.vue to apply
      await page.waitForTimeout(500);

      const heroContent = await page.locator('.VPHero').textContent();

      // Hero should contain this theme's product name
      expect(heroContent).toContain(themeConfig.productName);

      // Hero should NOT contain the other theme's product name
      const otherTheme = themeConfigs.find(t => t.key !== themeConfig.key);
      if (themeConfig.key === 'mss') {
        // MSS should not show "Certifaction" (except as legal entity)
        expect(heroContent).not.toContain('Certifaction');
      }
    });
  });
}
