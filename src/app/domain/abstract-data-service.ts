import {HttpClient, HttpParams} from "@angular/common/http";
import {firstValueFrom, map} from "rxjs";
import {PagedResponse} from "./paged-response";
import {inject} from "@angular/core";

export abstract class AbstractDataService<T> {
  abstract endpoint: string;

  protected readonly http = inject(HttpClient);

  load(pageNumber = 1, pageSize = 10, params = new HttpParams()): Promise<T[]> {
    const finalParams = params.set("page", pageNumber).set("results", pageSize);

    return firstValueFrom(this.http.get<PagedResponse<T>>(this.endpoint, { params: finalParams }).pipe(
      map(response => response.results)
      // TODO - Error handling
    ));
  }
}
