# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Certifaction Client repository containing documentation and executable releases for the Certifaction privacy-first eSignature platform. The repository hosts a VitePress-based developer portal that documents the Certifaction Local API and CLI tools.

## Architecture

- **Documentation Site**: VitePress static site generator with Vue 3
- **Content Structure**:
  - `/docs/guides/` - User guides and tutorials (getting started, concepts, how-tos)
  - `/docs/references/` - API documentation, CLI commands, authentication
  - `/docs/.vitepress/` - VitePress configuration and theming
- **Assets**: `/assets/` and `/docs/assets/` contain images and static files
- **Legal**: EULA.md and LICENSE.md contain licensing information

## Development Commands

### Documentation Development
```bash
# Start development server
npm run docs:dev

# Build documentation site
npm run docs:build

# Preview built site
npm run docs:preview
```

### Package Management
```bash
# Install dependencies (development)
npm install --frozen-lockfile

# Install dependencies (CI)
npm ci
```

### Make Commands
```bash
# Install dependencies
make deps

# Build the documentation
make build

# Start development server
make run

# Prepare for CI
make prepare-ci
```

## Key Configuration Files

- `docs/.vitepress/config.js` - VitePress configuration with navigation, sidebar, and theme settings
- `package.json` - Node.js dependencies and npm scripts
- `Makefile` - Build automation commands

## Documentation Structure

The VitePress site is organized with:
- Navigation between "Guide" and "Reference" sections
- Sidebar navigation with collapsible sections
- Custom Vue components in `/docs/components/`
- RapiDoc integration for API documentation rendering

## Node Version

The project uses Node.js 19.8.1 (specified in package.json volta configuration).

## Testing

This repository does not contain test files - it's primarily a documentation site. The build process (`npm run docs:build`) serves as the primary validation step.