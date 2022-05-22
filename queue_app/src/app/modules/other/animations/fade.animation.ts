import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const fadeTrigger : AnimationTriggerMetadata = trigger('fade', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(500)
    ]),
    transition(':leave', animate(1, style({
        opacity: 0
    })))
]);