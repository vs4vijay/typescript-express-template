import * as morgan from 'morgan';

export const HTTP_LOGS_FORMAT = 'combined';

export function HttpLogger() {
  return morgan(HTTP_LOGS_FORMAT);
}
