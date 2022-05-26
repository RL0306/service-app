FROM node

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
RUN npx prisma generate


CMD ["npm", "run", "start:dev" ]