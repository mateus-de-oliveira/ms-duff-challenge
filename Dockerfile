FROM node:18-alpine as base

WORKDIR /app

ENV CI=true

COPY package.json yarn.lock huskyPrepare.js ./

RUN npm run start:prod

FROM base as build

RUN npm i

COPY . .

RUN npm run build

FROM base as prod

COPY --from=build /app/dist/ ./dist/

RUN npm run prisma:generate

CMD [ "node", "dist/main"]

