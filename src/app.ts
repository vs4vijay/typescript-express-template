import 'reflect-metadata';
import * as express from 'express';
import { useExpressServer, useContainer as useRoutingContainer } from 'routing-controllers';
import { createConnection, Connection, useContainer as useORMContainer } from 'typeorm';
import { Container } from 'typedi';

import dbConfig from './db';
import config from './config';
import { Logger, HttpLogger } from './loggers';

class App {
  public app: express.Application;
  public config: Record<string, any>;
  public logger: Logger;
  public connection: Connection;

  constructor(config: Record<string, any>) {
    this.app = express();
    this.config = config;
    this.logger = Logger.getLogger({ component: 'app' });
    this.init();
  }

  private async init() {
    // Configure HTTP Access Logs using Morgan
    this.app.use(HttpLogger());

    // Use TypeDI Container for TypeORM and Routing DI
    useORMContainer(Container);
    useRoutingContainer(Container);

    // TODO: Add middlewares, etc
    useExpressServer(this.app, {
      controllers: [`${__dirname}/controllers/**/*.{ts,js}`],
    });
    createConnection(dbConfig)
      .then(
        (_) => _,
        (reason) => {
          this.logger.error(reason);
          process.exit(1);
        },
      )
      .catch(this.logger.error);
  }

  public start() {
    this.app.listen(this.config['app']['port'], () => {
      console.log(`API Server is running: http://localhost:${this.config['app']['port']}`);
    });
  }
}

const app = new App(config);
app.start();

export default app;
