import { test, expect } from '@playwright/test';

/**
 * Content Validation Tests
 *
 * Consolidated from product-name-consistency.spec.js, links.spec.js,
 * and navigation.spec.js. Uses internal iteration (one test loops through
 * pages and collects failures) instead of generating one Playwright test
 * per page.
 */

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
  'http-proxy-settings',
  'cli',
];

// Full reference list including API pages (for page existence / link checks)
const allReferencePages = [
  ...referencePages,
  'api',
  'admin-api',
];

const themeConfigs = [
  {
    key: 'certifaction',
    productName: 'Certifaction',
    forbiddenNames: ['Magenta Security Sign'],
  },
  {
    key: 'mss',
    productName: 'Magenta Security Sign',
    forbiddenNames: ['Certifaction'],
  },
];

/**
 * Navigate to a themed page and wait for the theme to be fully applied.
 * Uses domcontentloaded to avoid blocking on font loads, then waits for
 * the theme CSS class on <html> plus a short stabilization delay for
 * Vue components to re-render with the correct product names.
 */
async function gotoThemed(page, url, themeKey) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('html')).toHaveClass(new RegExp(`theme-${themeKey}`));
  // Allow Vue reactivity to propagate (ProductName components, hero, etc.)
  await page.waitForTimeout(300);
}

/**
 * Extracts visible prose text from the main content area, excluding code blocks.
 * Runs in the browser context via page.evaluate().
 */
function getProseTextScript() {
  return () => {
    const doc = document.querySelector('.vp-doc');
    if (!doc) return '';
    const clone = doc.cloneNode(true);
    // Remove code blocks — they contain CLI output with theme-specific names
    clone.querySelectorAll('pre, code').forEach(el => el.remove());
    // Remove rapi-doc elements
    clone.querySelectorAll('rapi-doc').forEach(el => el.remove());
    return clone.textContent || '';
  };
}

// ── Page Existence (HTTP-only, no browser needed) ───────────────────────

test.describe('Page Existence', () => {
  for (const lang of languages) {
    test(`all ${lang} pages return 200`, async ({ request }) => {
      const failures = [];

      // Homepage
      const homeResp = await request.get(`http://localhost:4173/${lang}/`);
      if (homeResp.status() !== 200) {
        failures.push({ page: `/${lang}/`, status: homeResp.status() });
      }

      // Guide pages
      for (const page of guidePages) {
        const resp = await request.get(`http://localhost:4173/${lang}/guides/${page}`);
        if (resp.status() !== 200) {
          failures.push({ page: `/${lang}/guides/${page}`, status: resp.status() });
        }
      }

      // Reference pages (including api + admin-api)
      for (const page of allReferencePages) {
        const resp = await request.get(`http://localhost:4173/${lang}/references/${page}`);
        if (resp.status() !== 200) {
          failures.push({ page: `/${lang}/references/${page}`, status: resp.status() });
        }
      }

      expect(
        failures,
        `Pages returning non-200:\n${failures.map(f => `  ${f.page} -> ${f.status}`).join('\n')}`
      ).toHaveLength(0);
    });
  }
});

// ── Product Names ───────────────────────────────────────────────────────

for (const themeConfig of themeConfigs) {
  test.describe(`Product Names (theme=${themeConfig.key})`, () => {

    test('homepage hero and features correct across languages', async ({ page }) => {
      const failures = [];

      for (const lang of languages) {
        await gotoThemed(page, `/${lang}/?theme=${themeConfig.key}`, themeConfig.key);

        // Hero name check
        const heroName = await page.locator('.VPHero .name').textContent();
        if (!heroName.includes(themeConfig.productName)) {
          failures.push(`/${lang}/ hero missing "${themeConfig.productName}"`);
        }

        const heroText = await page.locator('.VPHero').textContent();
        for (const forbidden of themeConfig.forbiddenNames) {
          if (heroText.includes(forbidden)) {
            failures.push(`/${lang}/ hero contains forbidden "${forbidden}"`);
          }
        }

        // Feature cards check
        const features = await page.locator('.VPFeature').all();
        for (const feature of features) {
          const text = await feature.textContent();
          for (const forbidden of themeConfig.forbiddenNames) {
            if (text.includes(forbidden)) {
              failures.push(`/${lang}/ feature contains forbidden "${forbidden}": "${text.substring(0, 80)}..."`);
            }
          }
          if (!text.includes(themeConfig.productName)) {
            failures.push(`/${lang}/ feature missing "${themeConfig.productName}": "${text.substring(0, 80)}..."`);
          }
        }
      }

      expect(failures, failures.join('\n')).toHaveLength(0);
    });

    for (const lang of languages) {
      test(`${lang} pages have no wrong product name`, async ({ page }) => {
        // This test visits 19 pages; extend timeout
        test.setTimeout(120_000);
        const failures = [];

        // Guide pages
        for (const pageName of guidePages) {
          const url = `/${lang}/guides/${pageName}?theme=${themeConfig.key}`;
          await gotoThemed(page, url, themeConfig.key);
          await page.locator('.vp-doc').waitFor();

          const proseText = await page.evaluate(getProseTextScript());
          for (const forbidden of themeConfig.forbiddenNames) {
            if (proseText.includes(forbidden)) {
              failures.push(`/${lang}/guides/${pageName} prose contains forbidden "${forbidden}"`);
            }
          }
        }

        // Reference pages (excluding api/admin-api — they use RapiDoc)
        for (const pageName of referencePages) {
          const url = `/${lang}/references/${pageName}?theme=${themeConfig.key}`;
          await gotoThemed(page, url, themeConfig.key);
          await page.locator('.vp-doc').waitFor();

          const proseText = await page.evaluate(getProseTextScript());
          for (const forbidden of themeConfig.forbiddenNames) {
            if (proseText.includes(forbidden)) {
              failures.push(`/${lang}/references/${pageName} prose contains forbidden "${forbidden}"`);
            }
          }
        }

        expect(failures, failures.join('\n')).toHaveLength(0);
      });
    }

    test('document titles use correct product name', async ({ page }) => {
      const samplePages = [
        { path: '/en/', name: 'en homepage' },
        { path: '/en/guides/about', name: 'en about' },
        { path: '/en/guides/installation', name: 'en installation' },
        { path: '/en/references/cli', name: 'en cli reference' },
      ];

      const failures = [];

      for (const { path, name } of samplePages) {
        await gotoThemed(page, `${path}?theme=${themeConfig.key}`, themeConfig.key);

        const title = await page.title();
        for (const forbidden of themeConfig.forbiddenNames) {
          if (title.includes(forbidden)) {
            failures.push(`${name} title contains forbidden "${forbidden}": "${title}"`);
          }
        }
      }

      expect(failures, failures.join('\n')).toHaveLength(0);
    });
  });
}

// ── Content Links ───────────────────────────────────────────────────────

test.describe('Content Links', () => {
  const allPages = [
    ...guidePages.map(p => ({ type: 'guides', page: p })),
    ...allReferencePages.map(p => ({ type: 'references', page: p })),
  ];

  for (const lang of languages) {
    test(`${lang} content links resolve correctly`, async ({ page }) => {
      // This test visits 21 pages and checks all links; extend timeout
      test.setTimeout(120_000);
      const brokenLinks = [];

      for (const { type, page: pageName } of allPages) {
        const pageUrl = `/${lang}/${type}/${pageName}`;
        await page.goto(pageUrl, { waitUntil: 'domcontentloaded' });

        const contentLinks = await page.locator('.vp-doc a[href]').all();

        for (const link of contentLinks) {
          const href = await link.getAttribute('href');
          if (!href) continue;
          if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) continue;
          if (href.match(/\.(rpm|deb|pkg|exe|msi|tar\.gz|zip)$/i)) continue;
          if (href.includes('/downloads/latest/')) continue;

          const fullUrl = new URL(href, `http://localhost:4173${pageUrl}`).href;
          if (!fullUrl.startsWith('http://localhost:4173')) continue;

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

// ── Navigation Links (skip on mobile) ───────────────────────────────────

test.describe('Navigation Links', () => {
  test('sidebar links resolve correctly', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      test.skip();
      return;
    }

    await page.goto('/en/guides/about', { waitUntil: 'domcontentloaded' });

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
    if (viewport && viewport.width < 768) {
      test.skip();
      return;
    }

    await page.goto('/en/', { waitUntil: 'domcontentloaded' });

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

// ── Asset Availability ──────────────────────────────────────────────────

test.describe('Asset Availability', () => {
  for (const theme of ['certifaction', 'mss']) {
    test(`${theme} theme images load on diagram pages`, async ({ page }) => {
      await gotoThemed(page, `/en/guides/digital-signature?theme=${theme}`, theme);
      await page.locator('.vp-doc').waitFor();

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
