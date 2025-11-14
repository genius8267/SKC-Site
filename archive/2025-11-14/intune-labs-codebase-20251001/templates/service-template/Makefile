.PHONY: deps ci test lint build run

deps:
	npm install

lint:
	npm run lint

test:
	npm test

build:
	npm run build

ci: deps lint test build

run:
	npm start
