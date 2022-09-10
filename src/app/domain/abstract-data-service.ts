import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, firstValueFrom, map} from "rxjs";
import {PagedResponse} from "./paged-response";
import {inject} from "@angular/core";

/**
 * Base class that can be used as a standard pattern for loading data from an endpoint
 */
export abstract class AbstractDataService<T> {
  /**
   * API endpoint
   */
  abstract endpoint: string;

  protected readonly http = inject(HttpClient);

  /**
   * Load a list of objects from the API. Assumes the API supports paging via the "page" and "results" parameters
   * @param pageNumber Page of data to load. Defaults to 0
   * @param pageSize Number of items per page to load. Defaults to 10
   * @param params
   */
  load(pageNumber = 0, pageSize = 10, params = new HttpParams()): Promise<T[]> {
    const finalParams = params.set("page", pageNumber).set("results", pageSize);

    return firstValueFrom(this.http.get<PagedResponse<T>>(this.endpoint, { params: finalParams }).pipe(
      map(response => response.results),
      // TODO - Better error handling
      catchError(e => {
        console.error("Failed to load data", e);
        return [];
      })
    ));
  }
}
