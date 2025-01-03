import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const port = process.env.GATEWAY_PORT || 3000;
  await app.listen(port, '0.0.0.0', () => {
    console.log(`Gateway listening on port ${port}`);
  });
}
bootstrap();
