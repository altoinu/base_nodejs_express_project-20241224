# base_nodejs_express_project-20241224

Sample basic Node.js server project setup with Express and some dev dependencies

## Writing README stuff

[https://help.github.com/en/articles/basic-writing-and-formatting-syntax](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)

## Node stuff

- Node.js (v23.5.0) and npm [https://nodejs.org/](https://nodejs.org/)
- PM2 (v5.4.3) [http://pm2.keymetrics.io](http://pm2.keymetrics.io)

## Initial set up

```
npm install
```

## To run

```
node src/index.mjs
```

...then try accessing one of defined routes:

- [http://localhost:3000/getip.json](http://localhost:3000/getip.json)
- [http://localhost:3000/config.json](http://localhost:3000/config.json)

## Lint

```
npm run lint:fix
```

## Optional environment variables

Set following values via <code>.env</code>
```
# Array of origins to allow in CORS, JSON format
CORS_ALLOW_ORIGIN=["http://localhost", "http://localhost:3000"]
# Port number to listen to. Default 3000
PORT=3000
```