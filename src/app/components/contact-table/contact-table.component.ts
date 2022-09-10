import { Component } from "@angular/core";
import {AddressBookDatasource} from "../../impl/address-book-datasource";
import {AddressEntry} from "../../domain/address-entry.interface";
import {AddressBookService} from "../../service/address-book.service";
import {FadeInOutAnimation} from "../../animations/fade-in-out.animation";
import {PageEvent} from "@angular/material/paginator";
import {Observable} from "rxjs";

/**
 * Component to display the list of address book entries and show a single entry when selected
 */
@Component({
  selector: "app-contact-table",
  templateUrl: "./contact-table.component.html",
  styleUrls: ["./contact-table.component.scss"],
  animations: [FadeInOutAnimation]
})
export class ContactTableComponent {
  readonly dataSource: AddressBookDatasource;
  readonly displayedColumns = ["thumbnail", "firstName", "lastName"];

  readonly dataLoading: Observable<boolean>;

  selectedEntry?: AddressEntry;

  constructor(addressBookService: AddressBookService) {
    this.dataSource = new AddressBookDatasource(addressBookService);
    this.dataLoading = this.dataSource.dataLoading();
  }

  showAddress(entry: AddressEntry): void {
    this.selectedEntry = entry;
  }

  panelClosed(): void {
    this.selectedEntry = undefined;
  }

  onPageChanged(event: PageEvent): void {
    this.dataSource.loadAddresses(event.pageIndex, event.pageSize);
  }
}
