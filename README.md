# Boilerplate

## Getting started

To prepare the project:

```bash
  npm install
  npm run knex migrate:latest
  npm run knex seed:run
```

Running the following command will start the client running on [port 5173](http://localhost:5173) (and the server on 3000).

```bash
  npm run dev
```

## Current stack

- TypeScript
- Vite
- React
- React Router
- Sass
- Express
- DB: PostgreSQL (deploy) & SQLite (dev)

## Adding modules

- [Auth0](./_docs/auth0.md)

- [Chakra UI](./_docs/chakra.md)

- Redux

```bash
  npm i -D redux react-redux
```

- Dotenv

```bash
  npm i dotenv
```

in `server/server.ts`:

```ts
import 'dotenv/config'
```
