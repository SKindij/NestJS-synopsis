import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// to bootstrap application and start server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // start listening on port for incoming HTTP requests
  await app.listen(3000);
}
bootstrap();
