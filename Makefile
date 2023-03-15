.PHONY: deps build run

prepare-ci:
	npm ci

deps:
	npm install --frozen-lockfile

build:
	npm run docs:build

run:
	npm run docs:dev
