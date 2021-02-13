import { Logger as TypeORMLogger, LoggerOptions, QueryRunner } from 'typeorm';

import { Logger } from './Logger';

export class DatabaseLogger extends Logger implements TypeORMLogger {
  private logger: Logger;

  constructor(private options?: LoggerOptions) {
    super();
    this.logger = Logger.getLogger({ component: 'DB' });
  }

  // The following log* methods have been taken from here : https://github.com/typeorm/typeorm/blob/master/src/logger/SimpleConsoleLogger.ts
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    if (
      this.options === 'all' ||
      this.options === true ||
      (Array.isArray(this.options) && this.options.indexOf('query') !== -1)
    ) {
      const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + JSON.stringify(parameters) : '');
      this.logger.info({ query: sql });
    }
  }

  logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    if (
      this.options === 'all' ||
      this.options === true ||
      (Array.isArray(this.options) && this.options.indexOf('error') !== -1)
    ) {
      const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + JSON.stringify(parameters) : '');
      this.logger.error({ queryFailed: sql, error: error });
    }
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + JSON.stringify(parameters) : '');
    this.logger.info({ slowQuery: sql, time: time });
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    if (this.options === 'all' || (Array.isArray(this.options) && this.options.indexOf('schema') !== -1)) {
      this.logger.info(message);
    }
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    this.logger.info(message);
  }

  log(level: 'log' | 'info' | 'warn' | 'alert', message: any, queryRunner?: QueryRunner) {
    switch (level) {
      case 'log':
        if (this.options === 'all' || (Array.isArray(this.options) && this.options.indexOf('log') !== -1))
          this.logger.info(message);
        break;
      case 'info':
        if (this.options === 'all' || (Array.isArray(this.options) && this.options.indexOf('info') !== -1))
          this.logger.info(message);
        break;
      case 'warn':
        if (this.options === 'all' || (Array.isArray(this.options) && this.options.indexOf('warn') !== -1))
          this.logger.warn(message);
        break;
    }
  }
}
