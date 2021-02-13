class Metadata {
  totalCount: number;
}

export class ResponseDTO<T> {
  metadata: Metadata;

  data: T | T[];

  constructor(records: T | T[], totalCount?: number) {
    this.data = records;
    this.metadata = new Metadata();
    this.metadata.totalCount = totalCount;
  }

  asPromise(): Promise<ResponseDTO<T>> {
    return Promise.resolve(this);
  }
}
