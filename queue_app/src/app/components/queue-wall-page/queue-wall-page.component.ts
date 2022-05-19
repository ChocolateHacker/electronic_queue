import { Component, HostBinding, OnInit } from '@angular/core';
import { UserViewModel } from 'src/app/models/user.model';
import { fadeTrigger } from 'src/app/modules/other/animations/fade.animation';




@Component({
    selector: 'app-queue-wall-page',
    templateUrl: './queue-wall-page.component.html',
    styleUrls: ['./styles/queue-wall-page.component.scss'],
    animations: [fadeTrigger]
})
export class QueueWallPageComponent implements OnInit {
    @HostBinding('@fade') public a: boolean = true;
    
    public users!: UserViewModel[];

    constructor() {
        return;
    }

    public ngOnInit(): void {
        return;
    }

}
