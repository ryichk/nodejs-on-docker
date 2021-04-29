FROM node:lts

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY . .

EXPOSE 8080
