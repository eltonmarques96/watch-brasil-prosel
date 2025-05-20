import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    UsersModule,
    LoggerModule.forRoot(),
    ConfigModule.forRoot(),
    RedisModule.forRoot({
      config: {
        host: '0.0.0.0',
        port: 6379,
        password: 'password',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
