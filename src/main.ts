import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  await app.listen(process.env.PORT || 3000, '0.0.0.0');

  app.enableCors();
  await app.init();
}

bootstrap();

export const api = server;