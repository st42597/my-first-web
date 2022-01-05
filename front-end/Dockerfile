FROM node:16.13.1

WORKDIR /front-end
COPY . ./

EXPOSE 3000

RUN yarn install

CMD  ["yarn", "start"]