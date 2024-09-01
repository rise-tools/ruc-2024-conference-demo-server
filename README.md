RUC 2024 Conference Demo Server
=====

```sh
# Setup local databasen
$ docker-compose up

# Setup Prisma client
$ npx prisma generate

# Setup database structure and run migrations
$ npx prisma migrate dev --name init
$ npm run seed

# This will start the tunnel
$ npm run tunnel

# This will start the server
$ npm run dev
```
