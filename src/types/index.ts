export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxioxRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  header: any
  config: AxioxRequestConfig
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxioxRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  interceptors: {
    request: AxiosInterceptorManager<AxioxRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }
  request<T = any>(config: AxioxRequestConfig): AxiosPromise<T>
  get<T = any>(url: string, config?: AxioxRequestConfig): AxiosPromise<T>
  delete<T = any>(url: string, config?: AxioxRequestConfig): AxiosPromise<T>
  head<T = any>(url: string, config?: AxioxRequestConfig): AxiosPromise
  options<T = any>(url: string, config?: AxioxRequestConfig): AxiosPromise<T>
  post<T = any>(url: string, data?: any, config?: AxioxRequestConfig): AxiosPromise<T>
  put<T = any>(url: string, data?: any, config?: AxioxRequestConfig): AxiosPromise<T>
  patch<T = any>(url: string, data?: any, config?: AxioxRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxioxRequestConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxioxRequestConfig): AxiosPromise<T>
}
// 对外使用，只能删除添加
export interface AxiosInterceptorManager<T> {
  use(resolve: ResolvedFn<T>, rejected?: RejectedFn): number
  eject(id: number): void
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}
