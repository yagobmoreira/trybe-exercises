FROM node:18-alpine as dev

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm clean-install

COPY . /app

EXPOSE 3000
CMD ["npm", "start"]