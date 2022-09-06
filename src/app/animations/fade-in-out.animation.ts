import {animate, style, transition, trigger} from "@angular/animations";

/**
 * Animation definition for fading an element in and out
 */
export const FadeInOutAnimation = trigger("fadeInOut", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("100ms", style({ opacity: 1 }))
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate("100ms", style({ opacity: 0 }))
  ])
]);
