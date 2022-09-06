import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AddressEntry} from "../domain/address-entry.interface";
import {firstValueFrom, map} from "rxjs";
import {PagedResponse} from "../domain/paged-response";

@Injectable({ providedIn: "root" })
export class AddressBookService {

  private readonly endpoint = "https://randomuser.me/api/";

  constructor(private readonly http: HttpClient) {
  }

  findAddresses(pageNumber = 1, pageSize = 10): Promise<AddressEntry[]> {
    const params = new HttpParams({
      fromObject: {
        seed: 'nuvalence',
        exc: 'login,registered,id',
        page: pageNumber,
        results: pageSize
      }
    });

    return firstValueFrom(this.http.get<PagedResponse<AddressEntry>>(this.endpoint, { params }).pipe(
      map(response => response.results)
      // TODO - Error handling
    ));
  }
}
