import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  const languages = ['en', 'de', 'fr', 'it'];

  for (const lang of languages) {
    test(`navigation works in ${lang}`, async ({ page, viewport }) => {
      // Skip on mobile - sidebar is collapsed
      if (viewport && viewport.width < 768) {
        test.skip();
        return;
      }

      await page.goto(`/${lang}/guides/about`);

      // Check sidebar navigation
      const sidebar = page.locator('.VPSidebar');
      await expect(sidebar).toBeVisible();

      // Check that the about link exists in sidebar
      const aboutLink = page.locator('.VPSidebar a[href*="/guides/about"]');
      await expect(aboutLink.first()).toBeVisible();

      // Verify we're on the correct page
      expect(page.url()).toContain('about');
    });
  }

  test('sidebar links resolve correctly', async ({ page, viewport }) => {
    // Skip on mobile - sidebar is collapsed
    if (viewport && viewport.width < 768) {
      test.skip();
      return;
    }

    await page.goto('/en/guides/about');

    const sidebarLinks = await page.locator('.VPSidebar a[href]').all();
    const brokenLinks = [];

    for (const link of sidebarLinks) {
      const href = await link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) continue;

      const fullUrl = new URL(href, 'http://localhost:4173/en/guides/').href;
      const response = await page.request.get(fullUrl);

      if (response.status() !== 200) {
        brokenLinks.push({ href, status: response.status() });
      }
    }

    expect(brokenLinks, `Broken sidebar links: ${JSON.stringify(brokenLinks)}`).toHaveLength(0);
  });

  test('navbar links resolve correctly', async ({ page, viewport }) => {
    // Skip on mobile - navbar is collapsed
    if (viewport && viewport.width < 768) {
      test.skip();
      return;
    }

    await page.goto('/en/');

    const navLinks = await page.locator('.VPNavBarMenuLink').all();
    const brokenLinks = [];

    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) continue;

      const fullUrl = new URL(href, 'http://localhost:4173/').href;
      const response = await page.request.get(fullUrl);

      if (response.status() !== 200) {
        brokenLinks.push({ href, status: response.status() });
      }
    }

    expect(brokenLinks, `Broken navbar links: ${JSON.stringify(brokenLinks)}`).toHaveLength(0);
  });
});
