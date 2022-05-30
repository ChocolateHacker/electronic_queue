import { Component, HostBinding } from '@angular/core';
import { UserViewModel } from '../../models/user.model';
import { fadeTrigger } from '../../modules/other/animations/fade.animation';




@Component({
    selector: 'app-queue-wall-page',
    templateUrl: './queue-wall-page.component.html',
    animations: [fadeTrigger]
})
export class QueueWallPageComponent{
    @HostBinding('@fade') public a: boolean = true;
    public users!: UserViewModel[];
}
