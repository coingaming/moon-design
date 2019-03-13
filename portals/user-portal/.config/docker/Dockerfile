FROM node:10-alpine

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

ADD ./dist .
ADD ./node_modules ./node_modules

CMD ["node", "server.bundle.js"]
