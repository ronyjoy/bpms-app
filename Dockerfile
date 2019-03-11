FROM node:8.15.1-jessie-slim
WORKDIR /usr/src/app
RUN mkdir client
WORKDIR /usr/src/app/client
COPY client/package.json /usr/src/app/client/package.json
COPY client/package-lock.json /usr/src/app/client/package-lock.json
COPY client/.env /usr/src/app/client/.env
RUN npm install
COPY client/public /usr/src/app/client/public
COPY client/src /usr/src/app/client/src
RUN npm run build

FROM node:8.15.1-jessie-slim
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app/client/build/ /usr/src/app/client/build/
RUN mkdir server
WORKDIR /usr/src/app/server
COPY package.json /usr/src/app/server/package.json
COPY package-lock.json /usr/src/app/server/package-lock.json
COPY config /usr/src/app/server/config
COPY controllers /usr/src/app/server/controllers
COPY core /usr/src/app/server/core
COPY models /usr/src/app/server/models
COPY routes /usr/src/app/server/routes
COPY services /usr/src/app/server/services
COPY .babelrc /usr/src/app/server/.babelrc
COPY index.js /usr/src/app/server/index.js
RUN npm install
RUN /usr/src/app/server/node_modules/.bin/babel . --ignore node_modules,log,dist,client,.vscode,.git  -d dist -s
ENV PORT 80
EXPOSE 80
CMD npm start ./dist/index.js