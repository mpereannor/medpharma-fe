FROM node:20.9.0-alpine3.18

WORKDIR /medpharma/fe

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
