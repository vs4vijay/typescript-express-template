import config from './config';

export default {
  type: config.db.type as never,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database, // TODO: Comment this and uncomment next line when using Oracle
  // sid: config.db.database,
  logging: config.db.logging,
  migrationsRun: config.db.migrationsRun,
  synchronize: config.db.synchronize,
  entities: [`${__dirname}/models/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  subscribers: [`${__dirname}/subscribers/*.{ts,js}`],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers',
  },
};
