import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

export const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useFactory: async (configService: ConfigService) => {
    const store = await redisStore({
      socket: {
        host: '0.0.0.0',
        port: process.env.REDIS_CACHE_PORT,
      },
    });
    return {
      store: () => store,
    };
  },
  inject: [ConfigService],
};
