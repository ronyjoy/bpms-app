FROM node:8.15.1-jessie-slim
WORKDIR /usr/src/app
# Copy across client package.json
RUN mkdir client
COPY ./client/package.json client/package.json
# Install client dependancies
RUN npm install --prefix client

# Copy server package.json
COPY package.json .
# Install server dependancies
RUN npm install

# Copy client files
COPY client/public client/public
COPY client/src client/src

RUN ls
# Build client
RUN ./node_modules/.bin/babel . --ignore node_modules,log,dist,client,.vscode,.git  -d dist -s

# Copy server 
COPY ./dist dist

CMD npm node ./dist/index.js