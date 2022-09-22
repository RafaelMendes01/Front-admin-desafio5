FROM node:16-alpine

USER root

WORKDIR /usr/vue-light-bootstrap-dashboard-master/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080