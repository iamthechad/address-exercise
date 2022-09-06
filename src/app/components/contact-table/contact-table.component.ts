import { Component } from "@angular/core";
import {AddressBookDatasource} from "../../impl/address-book-datasource";
import {AddressEntry} from "../../domain/address-entry.interface";
import {AddressBookService} from "../../service/address-book.service";
import {FadeInOutAnimation} from "../../animations/fade-in-out.animation";

@Component({
  selector: "app-contact-table",
  templateUrl: "./contact-table.component.html",
  styleUrls: ["./contact-table.component.scss"],
  animations: [FadeInOutAnimation]
})
export class ContactTableComponent {
  readonly dataSource: AddressBookDatasource;
  readonly displayedColumns = ["thumbnail", "firstName", "lastName"];

  selectedEntry?: AddressEntry;

  constructor(addressBookService: AddressBookService) {
    this.dataSource = new AddressBookDatasource(addressBookService);
  }

  showAddress(entry: AddressEntry): void {
    this.selectedEntry = entry;
  }

  panelClosed(): void {
    this.selectedEntry = undefined;
  }
}
