# syntax=docker/dockerfile:1

FROM node:12-buster-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm ci

COPY . .
