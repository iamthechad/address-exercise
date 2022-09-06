import {animate, style, transition, trigger} from "@angular/animations";

export const SlideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(3000px)' }),
    animate('300ms ease-in', style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    // style({ opacity: 1 }),
    animate('300ms ease-out', style({ transform: 'translateX(3000px)' }))
  ])
]);
