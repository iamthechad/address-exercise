import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddressEntry} from "../domain/address-entry.interface";
import {SlideInOutAnimation} from "../animations/slide-in-out.animation";
import {AnimationEvent} from "@angular/animations";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  animations: [SlideInOutAnimation]
})
export class SidePanelComponent {

  @Input() entry?: AddressEntry;

  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
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
