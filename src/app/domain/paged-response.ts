export interface PagedResponse<T> {
  results: T[];
  info?: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
