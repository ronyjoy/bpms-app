FROM node:8.15.1-jessie-slim
WORKDIR /usr/src/app
RUN mkdir client
WORKDIR /usr/src/app/client
COPY ./client/package.json package.json
COPY ./client/.env .env
RUN npm install
COPY ./client/public public
COPY ./client/src src
RUN npm run build

FROM node:8.15.1-jessie-slim
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app/client/build/ ./client/build/
WORKDIR /usr/src/app/server
COPY ./package.json .
COPY ./config config
COPY ./controllers controllers
COPY ./core core
COPY ./models models
COPY ./routes routes
COPY ./services services
COPY ./.babelrc .babelrc
COPY ./index.js index.js
RUN npm install
RUN ./node_modules/.bin/babel . --ignore node_modules,log,dist,client,.vscode,.git  -d dist -s
COPY ./dist dist
ENV PORT 80
EXPOSE 80
CMD npm start ./dist/index.js