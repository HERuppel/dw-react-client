// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Response<T = any> {
  success: boolean;
  message: string;
  content: T | null;
}
