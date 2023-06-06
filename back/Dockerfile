FROM node:18.5-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN apk add --no-cache bash

COPY . .

CMD [ "npm", "run", "start:dev" ]