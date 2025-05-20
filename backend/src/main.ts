import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  console.log(process.env.APP_PORT);
  await app.listen(process.env.APP_PORT ?? 3000);
}
void bootstrap();
