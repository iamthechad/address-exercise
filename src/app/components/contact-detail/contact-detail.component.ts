import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AddressEntry} from "../../domain/address-entry.interface";
import {SlideInOutAnimation} from "../../animations/slide-in-out.animation";

/**
 * Component to display a single address book entry
 */
@Component({
  selector: "app-contact-detail",
  templateUrl: "./contact-detail.component.html",
  styleUrls: ["./contact-detail.component.scss"],
  animations: [SlideInOutAnimation]
})
export class ContactDetailComponent {

  @Input() entry?: AddressEntry;

  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
