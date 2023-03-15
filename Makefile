.PHONY: deps build run

deps:
	npm install --frozen-lockfile

build:
	npm run docs:build 

run:
	npm run docs:dev
