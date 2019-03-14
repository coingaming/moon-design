FROM node:10-alpine

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

ADD ./dist ./dist
ADD ./node_modules ./node_modules
ADD .env.example .

RUN touch .env

CMD ["node", "dist/server.bundle.js"]
