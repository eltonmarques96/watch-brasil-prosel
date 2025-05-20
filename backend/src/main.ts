import './tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  const config = new DocumentBuilder()
    .setTitle('Prosel - Elton Marques')
    .setDescription('Processo Seletivo - Elton Marques para Watch Brasil')
    .setVersion('1.0')
    .addTag('dev')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.APP_PORT ?? 3000);
}
void bootstrap();
