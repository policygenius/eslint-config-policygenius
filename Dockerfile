FROM node:14

COPY package.json /app/
COPY yarn.lock /app/

WORKDIR /app

RUN yarn --frozen-lockfile

COPY . /app/
