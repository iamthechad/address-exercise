import { Component } from '@angular/core';
import {AddressBookDatasource} from "./impl/address-book-datasource";
import {AddressBookService} from "./service/address-book.service";
import {AddressEntry} from "./domain/address-entry.interface";
import {FadeInOutAnimation} from "./animations/fade-in-out.animation";
import {AnimationEvent} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FadeInOutAnimation]
})
export class AppComponent {
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

  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 (number of milliseconds in a second)
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either "open" or "closed"
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either "open" or "closed"
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
