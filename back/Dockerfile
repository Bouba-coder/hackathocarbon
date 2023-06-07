FROM node:18.5-alpine

WORKDIR /app

COPY package.json package*.json ./

RUN npm install
RUN npm i -g @nestjs/cli
RUN npx prisma generate
RUN apk add --no-cache bash

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]