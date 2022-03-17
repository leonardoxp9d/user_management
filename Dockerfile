FROM node

WORKDIR /usr/management

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3337

CMD ["npm","run","dev"]