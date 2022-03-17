import { Component, OnInit } from '@angular/core';
import { IUser } from '../../services/user.interfaces';




@Component({
    selector: 'app-queue-wall-page',
    templateUrl: './queue-wall-page.component.html',
    styleUrls: ['./queue-wall-page.component.scss']
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
