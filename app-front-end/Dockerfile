FROM node:lts-alpine as dependencies
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install 

FROM node:lts-alpine
WORKDIR /app