FROM node:21.4-alpine
COPY . /

RUN npm install

CMD npm run farm