FROM node:18-alpine

WORKDIR /backend1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start"]