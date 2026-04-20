# MovieDB - TMDB React App

URL Vercel: https://movie-pij5zhvlw-wesleycosta061203s-projects.vercel.app/

Aplicação React + TypeScript para explorar filmes populares, pesquisar títulos e gerenciar favoritos com persistência local.

## Stack

- React 18
- TypeScript
- React Router
- TanStack Query
- Axios
- Tailwind CSS
- Vitest + React Testing Library
- Docker + Docker Compose

## Requisitos

- Docker
- Docker Compose

## Configuração

1. Copie o arquivo de ambiente:

```bash
cp .env.example .env
```

2. Preencha o `VITE_TMDB_BEARER_TOKEN` com o token de leitura da TMDB.

## Comandos rápidos

### Docker

```bash
make up         # sobe a aplicação
make down       # derruba os containers
make restart    # reinicia tudo
make logs       # acompanha logs
make sh         # abre shell no container
make test       # roda testes
make lint       # roda lint
make typecheck  # roda checagem de tipos
make build      # gera build
```

### NPM local

```bash
npm install
npm run dev
npm run test
npm run lint
npm run typecheck
npm run build
```

## Rotas

- `/` - filmes populares
- `/movie/:id` - detalhes do filme
- `/favorites` - favoritos
- `/search?q=termo&page=1` - busca

## Estrutura

```txt
src/
  app/
  features/
  shared/
  tests/
```

## Observações

- Favoritos são persistidos em `localStorage`.
- A paginação foi escolhida no lugar do infinite scroll para deixar o fluxo previsível e mais simples de testar.
- O token não deve ser commitado.
