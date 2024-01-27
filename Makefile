# Makefile

.PHONY: setup test run docker-build docker-run

setup:
	@npm install

install:
	@npm install

test:
	@npm test

run:
	node app.js

docker-build:
	@docker build -t my-stripe-app .

docker-run:
	@docker run -p 3000:3000 -d my-stripe-app
