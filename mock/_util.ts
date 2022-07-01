// Interface data format used to return a unified format

export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    code: 0,
    result,
    message,
    type: 'success',
  };
}

export function resultPageSuccess<T = any>(
  page: number,
  limit: number,
  list: T[],
  { message = 'ok' } = {},
) {
  const pageData = pagination(page, limit, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

export function pagination<T = any>(pageNo: number, limit: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(limit);
  const ret =
    offset + Number(limit) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(limit));
  return ret;
}

export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization;
}
