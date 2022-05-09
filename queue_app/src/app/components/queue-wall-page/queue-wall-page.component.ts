import { Component, OnInit } from '@angular/core';
import { UserViewModel } from 'src/app/models/user.model';




@Component({
    selector: 'app-queue-wall-page',
    templateUrl: './queue-wall-page.component.html',
    styleUrls: ['./styles/queue-wall-page.component.scss']
})
export class QueueWallPageComponent implements OnInit {

    public users!: UserViewModel[];

    constructor() {
        return;
    }

    public ngOnInit(): void {
        return;
    }

}
