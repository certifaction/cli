import { test, expect } from '@playwright/test';

/**
 * Product Name Consistency Tests
 *
 * Ensures that no cross-theme product name leaks occur on any page.
 * When viewing with ?theme=certifaction, "Magenta Security Sign" must not
 * appear in visible prose text. When viewing with ?theme=mss, standalone
 * "Certifaction" must not appear in visible prose text.
 *
 * Code blocks are excluded because they may contain CLI output that is
 * necessarily theme-specific. API reference pages (api, admin-api) are
 * excluded because they use RapiDoc with OpenAPI specs.
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

// Exclude api and admin-api — they use RapiDoc with OpenAPI specs
const referencePages = [
  'authentication',
  'http-proxy-settings',
  'cli',
];

const themeConfigs = [
  {
    key: 'certifaction',
    productName: 'Certifaction',
    // "Magenta Security Sign" must never appear in prose when certifaction theme is active
    forbiddenNames: ['Magenta Security Sign'],
  },
  {
    key: 'mss',
    productName: 'Magenta Security Sign',
    // Standalone "Certifaction" must never appear in prose when mss theme is active
    forbiddenNames: ['Certifaction'],
  },
];

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

for (const themeConfig of themeConfigs) {
  test.describe(`Product name consistency (theme=${themeConfig.key})`, () => {

    // ── Homepage tests (all languages) ──────────────────────────────────

    test.describe('Homepage', () => {
      for (const lang of languages) {
        test(`${lang} homepage hero has correct product name`, async ({ page }) => {
          await page.goto(`/${lang}/?theme=${themeConfig.key}`);
          await page.waitForTimeout(500);

          const heroName = page.locator('.VPHero .name');
          await expect(heroName).toContainText(themeConfig.productName);

          const heroText = await page.locator('.VPHero').textContent();
          for (const forbidden of themeConfig.forbiddenNames) {
            expect(
              heroText,
              `Hero on /${lang}/ contains forbidden "${forbidden}"`
            ).not.toContain(forbidden);
          }
        });

        test(`${lang} homepage features have correct product name`, async ({ page }) => {
          await page.goto(`/${lang}/?theme=${themeConfig.key}`);
          await page.waitForTimeout(500);

          const features = await page.locator('.VPFeature').all();
          expect(features.length).toBeGreaterThan(0);

          for (const feature of features) {
            const text = await feature.textContent();
            for (const forbidden of themeConfig.forbiddenNames) {
              expect(
                text,
                `Feature card on /${lang}/ contains forbidden "${forbidden}": "${text.substring(0, 80)}..."`
              ).not.toContain(forbidden);
            }
            // Positive check: features should contain the active theme's product name
            expect(
              text,
              `Feature card on /${lang}/ missing "${themeConfig.productName}"`
            ).toContain(themeConfig.productName);
          }
        });
      }
    });

    // ── Guide pages (all languages) ─────────────────────────────────────

    test.describe('Guide pages', () => {
      for (const lang of languages) {
        for (const pageName of guidePages) {
          test(`${lang}/guides/${pageName} has no wrong product name`, async ({ page }) => {
            await page.goto(`/${lang}/guides/${pageName}?theme=${themeConfig.key}`);
            await page.waitForTimeout(300);

            const proseText = await page.evaluate(getProseTextScript());
            for (const forbidden of themeConfig.forbiddenNames) {
              expect(
                proseText,
                `/${lang}/guides/${pageName} prose contains forbidden "${forbidden}"`
              ).not.toContain(forbidden);
            }
          });
        }
      }
    });

    // ── Reference pages (all languages, excluding api/admin-api) ────────

    test.describe('Reference pages', () => {
      for (const lang of languages) {
        for (const pageName of referencePages) {
          test(`${lang}/references/${pageName} has no wrong product name`, async ({ page }) => {
            await page.goto(`/${lang}/references/${pageName}?theme=${themeConfig.key}`);
            await page.waitForTimeout(300);

            const proseText = await page.evaluate(getProseTextScript());
            for (const forbidden of themeConfig.forbiddenNames) {
              expect(
                proseText,
                `/${lang}/references/${pageName} prose contains forbidden "${forbidden}"`
              ).not.toContain(forbidden);
            }
          });
        }
      }
    });

    // ── Document title check (sample pages) ─────────────────────────────

    test.describe('Document titles', () => {
      const samplePages = [
        { path: '/en/', name: 'en homepage' },
        { path: '/en/guides/about', name: 'en about' },
        { path: '/en/guides/installation', name: 'en installation' },
        { path: '/en/references/cli', name: 'en cli reference' },
      ];

      for (const { path, name } of samplePages) {
        test(`${name} document title uses correct product name`, async ({ page }) => {
          await page.goto(`${path}?theme=${themeConfig.key}`);
          await page.waitForTimeout(500);

          const title = await page.title();
          for (const forbidden of themeConfig.forbiddenNames) {
            expect(
              title,
              `Page title for ${path} contains forbidden "${forbidden}": "${title}"`
            ).not.toContain(forbidden);
          }
        });
      }
    });
  });
}
