import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const port = process.env.GATEWAY_PORT || 3000;
  await app.listen(port, () => {
    console.log(`Gateway is running on http://localhost:${port}`);
  });
}
bootstrap();