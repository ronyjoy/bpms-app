FROM node:8.15.1-jessie-slim
WORKDIR /usr/src/app
COPY package.json .
COPY config config
COPY controllers controllers
COPY core core
COPY models models
COPY routes routes
COPY services services
COPY .babelrc .babelrc
COPY index.js index.js
RUN npm install
RUN ./node_modules/.bin/babel . --ignore node_modules,log,dist,client,.vscode,.git  -d dist -s
COPY ./dist dist
EXPOSE 5000
CMD npm start ./dist/index.js