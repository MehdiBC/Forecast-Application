import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: [process.env.FRONT_URL] });
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: process.env.PORT || 3000,
    },
  });
  await app.startAllMicroservices();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT || 3000);
}

bootstrap().catch((error) => console.log(error));
