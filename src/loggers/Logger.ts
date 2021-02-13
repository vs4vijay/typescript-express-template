import * as winston from 'winston';

import config from '../config';

export class Logger {
  error: any;
  warn: any;
  info: any;
  debug: any;

  public static getLogger(defaultMeta?: any): Logger {
    const logger = winston.createLogger({
      defaultMeta: defaultMeta,
      transports: [
        new winston.transports.Console({
          level: config.env === 'development' ? 'debug' : 'info',
          format: winston.format.combine(winston.format.simple(), winston.format.timestamp(), winston.format.json()),
        }),
      ],
    });
    return logger;
  }
}
