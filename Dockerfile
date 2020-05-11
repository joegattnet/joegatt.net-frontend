# https://www.rockyourcode.com/dockerize-a-react-app/
## base image
FROM node:12.13.1-buster-slim

## set working directory
WORKDIR /usr/src/app

## add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

## install and cache app dependencies
## create user "node" and give permissions
COPY package.json /usr/src/app/package.json
RUN npm install react-scripts@3.2.0 -g --silent
RUN chown -R node:node . && chmod -R 755 .
USER node
RUN npm install --silent
RUN npm cache clean --force

## start app
## see package.json for npm command
CMD ["npm", "run", "start"]
