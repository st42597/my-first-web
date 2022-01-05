FROM node:16.13.1

WORKDIR /back-end
COPY . ./

EXPOSE 4000

RUN yarn install

CMD  ["node", "server.js"]