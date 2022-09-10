import {DataSource} from "@angular/cdk/collections";
import {AddressEntry} from "../domain/address-entry.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {AddressBookService} from "../service/address-book.service";

/**
 * Data source used with the Material table to display the address entries
 */
export class AddressBookDatasource extends DataSource<AddressEntry> {
  private readonly addressSubject = new BehaviorSubject<AddressEntry[]>([]);

  private readonly dataLoadingSubject = new BehaviorSubject<boolean>(true);

  constructor(private readonly addressBookService: AddressBookService) {
    super();
  }

  connect(): Observable<AddressEntry[]> {
    this.loadAddresses();
    return this.addressSubject.asObservable();
  }

  disconnect(): void {
    this.addressSubject.complete();
  }

  /**
   * Load a page of addresses and update the subject used by this datasource
   * @param pageNumber
   * @param pageSize
   */
  loadAddresses(pageNumber = 0, pageSize = 10): void {
    this.dataLoadingSubject.next(true);
    this.addressBookService.load(pageNumber, pageSize)
      .then(addresses => this.addressSubject.next(addresses))
      .finally(() => this.dataLoadingSubject.next(false));
  }

  /**
   * Return an observable that reports if data is currenty being loaded
   */
  dataLoading(): Observable<boolean> {
    return this.dataLoadingSubject.asObservable();
  }
}
