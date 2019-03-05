FROM node:8.15.1-jessie-slim
WORKDIR /usr/src/app
RUN mkdir client
COPY package.json ./client/package.json
COPY .env client/.env
RUN npm install --prefix client
COPY public client/public
COPY src client/src
EXPOSE 3000
CMD npm start --prefix client