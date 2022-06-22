import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session";
import * as passport from "passport";
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  };
  app.enableCors(options);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));


  app.use(
    session({
      secret: "keyboard cat", //env
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }
    })
  );

  app.use(passport.initialize());
  app.use(passport.session())

  await app.listen(3333);

}
bootstrap();
