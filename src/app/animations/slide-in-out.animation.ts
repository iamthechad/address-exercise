import {animate, style, transition, trigger} from "@angular/animations";

/**
 * Animation definition for sliding an element in and out from the right side of the screen
 */
export const SlideInOutAnimation = trigger("slideInOut", [
  transition(":enter", [
    style({ transform: "translateX(3000px)" }),
    animate("300ms ease-in", style({ transform: "translateX(0)" }))
  ]),
  transition(":leave", [
    animate("300ms ease-out", style({ transform: "translateX(3000px)" }))
  ])
]);
