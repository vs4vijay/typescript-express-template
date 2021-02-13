export class SearchCriteria {
  page: number;
  limit: number;
  filterBy: any;
  orderBy: any;

  /*
   * buildOrderByCriteria parses data coming in form ["createdAt", "-updatedAt"], convert into
   * TypeORM query format
   */
  static buildOrderByCriteria(orderByArray: Array<string>): any {
    const orderBy = {};
    if (orderByArray && orderByArray.length > 0) {
      for (const orderKey of orderByArray) {
        if (orderKey.startsWith('-')) {
          const orderKeyWithoutPrefix = orderKey.substring(1);
          orderBy[orderKeyWithoutPrefix] = 'DESC';
        } else {
          orderBy[orderKey] = 'ASC';
        }
      }
    }
    return orderBy;
  }

  buildFilterByCriteria() {
    // TODO: Will be used in Generic Search API
  }

  static getSearchCriteriaFromPagination({ page, limit, orderBy }): SearchCriteria {
    const searchCriteria = new SearchCriteria();
    searchCriteria.page = page;
    searchCriteria.limit = limit;
    searchCriteria.orderBy = this.buildOrderByCriteria(orderBy);
    return searchCriteria;
  }
}
