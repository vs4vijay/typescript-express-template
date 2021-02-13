import { config as loadDotEnv } from 'dotenv';

loadDotEnv();

export const config = {
  env: process.env.NODE_ENV || 'development',
  app: {
    port: Number(process.env.PORT || 5000),
  },
  db: {
    type: process.env.DB_TYPE || 'oracle',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: process.env.DB_LOGGING === 'true',
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
  },
};

export default config;
