# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-theme developer documentation site for the Certifaction/Magenta Security Sign privacy-first eSignature platform. Built with VitePress, serves both brands from a single build with runtime theme switching based on domain name or `?theme=` query parameter.

## Architecture

### Multi-Theme System
- **Runtime theme switching**: Single build, JS detects domain → applies theme
- **Theme detection priority**: (1) `?theme=` query param → (2) domain suffix → (3) default `certifaction`
- **Domain rules**: `*.certifaction.com` → certifaction; `*.telesec.de` or `*.magenta-security-sign.com` → mss

### Theme Directory Structure
```
docs/.vitepress/theme/                  # VitePress theme
  index.js                              # Theme entry, registers components
  Layout.vue                            # Layout wrapper (logo/footer/favicon/hero swap)
  useTheme.js                           # Vue composable for theme detection
  themes/                               # Theme definitions
    index.js                            # Aggregates themes
    certifaction/config.js + style.css  # Blue #0669F2
    mss/config.js + style.css           # Magenta #e20074, TeleGroteskNext font

docs/public/themes/                     # Theme-specific static assets
  certifaction/                         # Logos, favicon, diagrams
  mss/                                  # Logos, favicon, diagrams

docs/components/                        # Global Vue components
  ProductName.vue                       # Renders theme-dependent product name
  ProductNameShort.vue                  # Renders theme-dependent short name
  ThemeImage.vue                        # Renders theme-dependent images
  ApiDoc.vue                            # RapiDoc with theme-aware primary color
  DownloadsPage.vue                     # Downloads with theme-aware binary prefix
```

### Content Structure
- `/docs/{en,de,fr,it}/` — 4 languages, each with guides/ and references/
- `/docs/.vitepress/locales/` — VitePress locale configs (brand-neutral titles)
- `/docs/.vitepress/navigation/` — Sidebar and navbar navigation per language
- `/docs/downloads.data.js` — Build-time data loader for download links

### Downloads
- Binaries stored once under `docs/public/downloads/` with canonical `certifaction-cli_*` names
- Theme system controls display names via `download` attribute and rendered text
- Downloaded via `scripts/download-releases.sh` (not checked into git)

### Deployment
- **GitHub Pages**: Existing workflow for transition period
- **Docker/K8s**: nginx container via `ci_gitops.yaml` → GHCR → GitOps

## Development Commands

```bash
npm run docs:dev          # Start development server
npm run docs:build        # Build documentation site
npm run docs:preview      # Preview built site
npm run test:e2e          # Run Playwright E2E tests
npm run test:e2e:ui       # Interactive test UI
npm run test:e2e:headed   # Tests in headed browser
npm run test:e2e:debug    # Debug tests
```

### Make Commands
```bash
make deps                 # Install dependencies
make build                # Build the documentation
make run                  # Start development server
make download-releases    # Download CLI binaries
make install-browsers     # Install Playwright browsers
make test                 # Run E2E tests
make prepare-ci           # CI setup (npm ci + browsers)
```

## Key Configuration Files

- `docs/.vitepress/config.js` — VitePress config with locale imports
- `docs/.vitepress/shared.js` — Shared config: flash-prevention script, dead link ignoring, SSR defaults
- `docs/.vitepress/theme/useTheme.js` — Theme detection composable
- `docs/.vitepress/theme/Layout.vue` — Runtime branding swap
- `playwright.config.js` — Playwright test configuration
- `Dockerfile` + `docker/nginx/nginx.conf` — Container setup

## Testing

E2E tests in `tests/e2e/` are parameterized for both themes using `?theme=` query params:
- `branding.spec.js` — Hero, logo, colors, footer, favicon per theme
- `navigation.spec.js` — Sidebar/navbar links across languages
- `i18n.spec.js` — Language parity, brand text per theme
- `downloads.spec.js` — Binary prefix, download attributes per theme
- `links.spec.js` — Page existence, link validation, asset loading
- `api-docs.spec.js` — RapiDoc primary color per theme

## Node Version

The project uses Node.js 24.8.0 (specified in package.json volta configuration).
