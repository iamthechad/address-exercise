import {DataSource} from "@angular/cdk/collections";
import {AddressEntry} from "../domain/address-entry.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {AddressBookService} from "../service/address-book.service";

export class AddressBookDatasource extends DataSource<AddressEntry> {
  private readonly addressSubject = new BehaviorSubject<AddressEntry[]>([]);

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

  loadAddresses(pageNumber = 1, pageSize = 10): void {
    this.addressBookService.load(pageNumber, pageSize)
      .then(addresses => this.addressSubject.next(addresses));
  }
}
