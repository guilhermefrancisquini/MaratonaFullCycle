FROM node:14.1-alpine
WORKDIR src

COPY package*.json ./

RUN yarn install

COPY src/ .

EXPOSE 3000

CMD [ "node", "index.js" ]