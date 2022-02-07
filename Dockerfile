FROM node:14.17

COPY package.json /app/
COPY yarn.lock /app/

WORKDIR /app

RUN yarn --frozen-lockfile

COPY . /app/
