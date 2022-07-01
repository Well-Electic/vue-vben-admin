export interface BasicPageParams {
  page: number;
  limit: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}
