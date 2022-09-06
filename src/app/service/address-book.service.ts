import {Injectable} from "@angular/core";
import {HttpParams} from "@angular/common/http";
import {AddressEntry} from "../domain/address-entry.interface";
import {AbstractDataService} from "../domain/abstract-data-service";

@Injectable({ providedIn: "root" })
export class AddressBookService extends AbstractDataService<AddressEntry> {

  readonly endpoint = "https://randomuser.me/api/";

  override load(pageNumber = 1, pageSize = 10, params = new HttpParams()): Promise<AddressEntry[]> {
    const apiParams = params
      .set("seed", "nuvalence")
      .set("exc", "login,registered,id");

    return super.load(pageNumber, pageSize, apiParams);
  }
}
