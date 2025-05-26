/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';

export function getTypeOrmConfig(): TypeOrmModuleOptions {
  const isTest = process.env.NODE_ENV === 'test';
  const sqliteConfiguration: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: ':memory:',
    synchronize: isTest,
    dropSchema: isTest,
    entities: [User],
    autoLoadEntities: true,
  };
  const postgresConfiguration: TypeOrmModuleOptions = {
    type: 'postgres',
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    dropSchema: false,
    autoLoadEntities: true,
    entities: [],
  };
  if (isTest) {
    return sqliteConfiguration;
  }
  return postgresConfiguration;
}
export const AppDataSource = new DataSource(getTypeOrmConfig() as any);
export default AppDataSource;
