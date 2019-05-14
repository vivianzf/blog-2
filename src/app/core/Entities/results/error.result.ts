export interface ErrorResult {
  msg ?: string;
  errors: {[key: string]: {[key: string]: string} | string};
}
