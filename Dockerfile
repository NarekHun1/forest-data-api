FROM node:14.16.0

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm", "start" ]
