import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../services/interfaces/user.interfaces';




@Component({
    selector: 'app-queue-wall-page',
    templateUrl: './queue-wall-page.component.html',
    styleUrls: ['./styles/queue-wall-page.component.scss']
})
export class QueueWallPageComponent implements OnInit {

    public users!: IUser[];

    constructor() {
        return;
    }

    public ngOnInit(): void {
        return;
    }

}
