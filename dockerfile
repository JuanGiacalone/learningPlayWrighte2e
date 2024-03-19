FROM mcr.microsoft.com/playwright:bionic


#Install some dependencies

WORKDIR /usr/local/unofarmrpg_farmer
COPY . /usr/local/unofarmrpg_farmer
RUN npm install
RUN npx playwright install

CMD npm run farm