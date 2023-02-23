export interface Data<T> {
  data: T[],
  total: number,
  message?: string,
}

export type QueryParamsType = {
  keywords: string,
  orderBy: string,
  orderType: string,
  page: number,
  limit: number,
}

export type ParamsType = {
  [key: string]: number | string | Date,
}


export type ResponseType = {
  statusCode: number,
  message?: string,
}

export interface ResponseDataType<T> extends ResponseType {
  data: T,
}

