/**
 * Interface to represent a paged response from the randomuser.me API
 */
export interface PagedResponse<T> {
  results: T[];
  info?: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
