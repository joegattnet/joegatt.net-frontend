# FROM nginx:alpine
# COPY . /usr/share/nginx/html
# COPY ./build /var/www
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# ENTRYPOINT ["nginx","-g","daemon off;"]

# Stage 1 - the build process
# FROM node:7.10 as build-deps
# WORKDIR /usr/src/app
# COPY package.json yarn.lock ./
# RUN yarn
# COPY . ./
# RUN yarn build

# # Stage 2 - the production environment
# FROM nginx:1.12-alpine
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:latest

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install

# COPY . .

# CMD [ "npm", "start" ]

FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]doc
