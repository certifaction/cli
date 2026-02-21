.PHONY: deps build run prepare-ci download-releases install-browsers test

prepare-ci:
	npm ci
	npx playwright install --with-deps chromium firefox webkit

deps:
	npm install --frozen-lockfile

build:
	npm run docs:build

run:
	npm run docs:dev

download-releases:
	./scripts/download-releases.sh

install-browsers:
	npx playwright install chromium firefox webkit

test:
	npx playwright test --fail-on-flaky-tests
