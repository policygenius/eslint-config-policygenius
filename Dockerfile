FROM us.gcr.io/pg-shared-v1/node16-18-alpine3-16:latest
RUN apk --no-cache add bash

COPY package.json /app/
COPY yarn.lock /app/

WORKDIR /app

RUN yarn --frozen-lockfile

COPY . /app/
