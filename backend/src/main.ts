import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { envConfig } from './general/configs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(envConfig.port);
}
bootstrap();
