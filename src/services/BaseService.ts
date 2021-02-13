export class BaseService {
  defaultPage: number;

  defaultLimit: number;

  defaultOrderBy: unknown;

  constructor() {
    this.defaultPage = 0;
    this.defaultLimit = 10;
    this.defaultOrderBy = {
      createdAt: 'DESC',
    };
  }
}
