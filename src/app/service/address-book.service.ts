import {Injectable} from "@angular/core";
import {HttpParams} from "@angular/common/http";
import {AddressEntry} from "../domain/address-entry.interface";
import {AbstractDataService} from "../domain/abstract-data-service";

/**
 * Service for loading address book data
 */
@Injectable({ providedIn: "root" })
export class AddressBookService extends AbstractDataService<AddressEntry> {

  readonly endpoint = "https://randomuser.me/api/";

  /**
   * Load address book entries from the api. login, registered, and id return values are omitted from the response
   * @param pageNumber
   * @param pageSize
   * @param params
   */
  override load(pageNumber = 0, pageSize = 10, params = new HttpParams()): Promise<AddressEntry[]> {
    const apiParams = params
      .set("seed", "nuvalence")
      .set("exc", "login,registered,id");

    // Add 1 to the page number since the paging on randomuser.me is 1-based instead of 0-based
    return super.load(pageNumber + 1, pageSize, apiParams);
  }
}
