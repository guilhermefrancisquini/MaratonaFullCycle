# develop stage
FROM node:14.1-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @nestjs/cli
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn install 
RUN yarn build

# production stage
FROM build-stage as production-stage
EXPOSE 3000
CMD ["yarn", "run", "start:prod"]