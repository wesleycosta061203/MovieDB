.PHONY: install up down restart logs sh test lint typecheck build

install:
	npm install

up:
	docker compose up --build

down:
	docker compose down

restart:
	docker compose down && docker compose up --build

logs:
	docker compose logs -f app

sh:
	docker compose exec app sh

test:
	docker compose exec app npm run test

lint:
	docker compose exec app npm run lint

typecheck:
	docker compose exec app npm run typecheck

build:
	docker compose exec app npm run build
