FROM node:9.11

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY package.lock .
COPY index.js .
COPY .npmrc .
COPY dist ./dist

RUN npm install

EXPOSE 8080

CMD npm run start