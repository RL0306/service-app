FROM node

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 3333
RUN npx prisma generate


CMD ["npm", "run", "start:dev" ]