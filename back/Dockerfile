FROM node:18.5-alpine

WORKDIR /app

COPY package.json package*.json ./

RUN npm install
RUN apk add --no-cache bash

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]