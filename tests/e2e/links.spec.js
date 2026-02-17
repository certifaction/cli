import { test, expect } from '@playwright/test';

test.describe('Link Validation', () => {
  const languages = ['en', 'de', 'fr', 'it'];

  const guidePages = [
    'about',
    'downloads',
    'installation',
    'getting-started-api',
    'getting-started-cli',
    'digital-signature',
    'signature-request',
    'digital-twin',
    'local-processing',
    'security',
    'howto-sign-documents',
    'howto-request-one-signature',
    'howto-request-multiple-signatures',
    'howto-download-documents',
    'howto-check-document-status',
    'integration-guide',
  ];

  const referencePages = [
    'authentication',
    'api',
    'admin-api',
    'http-proxy-settings',
    'cli',
  ];

  // Page Existence Tests
  test.describe('Page Existence', () => {
    for (const lang of languages) {
      test(`${lang} homepage returns 200`, async ({ request }) => {
        const response = await request.get(`http://localhost:4173/${lang}/`);
        expect(response.status()).toBe(200);
      });
    }

    for (const lang of languages) {
      for (const page of guidePages) {
        test(`${lang}/guides/${page} returns 200`, async ({ request }) => {
          const response = await request.get(`http://localhost:4173/${lang}/guides/${page}`);
          expect(response.status()).toBe(200);
        });
      }
    }

    for (const lang of languages) {
      for (const page of referencePages) {
        test(`${lang}/references/${page} returns 200`, async ({ request }) => {
          const response = await request.get(`http://localhost:4173/${lang}/references/${page}`);
          expect(response.status()).toBe(200);
        });
      }
    }
  });

  // Navigation Link Tests
  test.describe('Navigation Links', () => {
    test('en sidebar links resolve correctly', async ({ page, viewport }) => {
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

    test('en navbar links resolve correctly', async ({ page, viewport }) => {
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

  // Content Links - all pages, all languages
  test.describe('Content Links', () => {
    const allPages = [
      ...guidePages.map(p => ({ type: 'guides', page: p })),
      ...referencePages.map(p => ({ type: 'references', page: p })),
    ];

    for (const lang of languages) {
      test(`${lang} content links resolve correctly`, async ({ page }) => {
        const brokenLinks = [];

        for (const { type, page: pageName } of allPages) {
          const pageUrl = `/${lang}/${type}/${pageName}`;
          await page.goto(pageUrl);

          const contentLinks = await page.locator('.vp-doc a[href]').all();

          for (const link of contentLinks) {
            const href = await link.getAttribute('href');
            if (!href) continue;

            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) continue;
            if (href.match(/\.(rpm|deb|pkg|exe|msi|tar\.gz|zip)$/i)) continue;
            if (href.includes('/downloads/latest/')) continue;

            const fullUrl = new URL(href, `http://localhost:4173${pageUrl}`).href;

            if (!fullUrl.startsWith('http://localhost:4173')) continue;

            // Strip hash fragments before checking — the page just needs to exist
            const urlWithoutHash = fullUrl.split('#')[0];
            const response = await page.request.get(urlWithoutHash);

            if (response.status() !== 200) {
              brokenLinks.push({
                sourcePage: pageUrl,
                href,
                status: response.status(),
              });
            }
          }
        }

        expect(
          brokenLinks,
          `Broken content links:\n${brokenLinks.map(l => `  ${l.sourcePage}: ${l.href} -> ${l.status}`).join('\n')}`
        ).toHaveLength(0);
      });
    }
  });

  // Asset Availability - verify theme images load
  test.describe('Asset Availability', () => {
    const themes = ['certifaction', 'mss'];

    for (const theme of themes) {
      test(`${theme} theme images load on diagram pages`, async ({ page }) => {
        await page.goto(`/en/guides/digital-signature?theme=${theme}`);

        // Wait for ThemeImage components to render
        await page.waitForTimeout(500);

        const images = await page.locator('.vp-doc img').all();

        for (const img of images) {
          const src = await img.getAttribute('src');
          expect(src).toBeTruthy();
          expect(src).toContain(`/themes/${theme}/`);

          const naturalWidth = await img.evaluate((el) => el.naturalWidth);
          expect(naturalWidth, `Image ${src} failed to load`).toBeGreaterThan(0);
        }
      });
    }
  });
});
