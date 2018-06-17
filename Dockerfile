FROM node:9.11

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY index.js .
COPY dist ./dist

RUN yarn install

EXPOSE 8080

CMD yarn start