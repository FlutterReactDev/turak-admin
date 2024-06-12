export interface BaseResponse<T> {
  state: number;
  message: string;
  details: string;
  result: T;
}
