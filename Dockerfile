FROM node:8.11.1
WORKDIR /usr/smathad/app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 8080
