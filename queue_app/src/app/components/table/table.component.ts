import { Component, OnInit } from '@angular/core';
import { IRecord } from 'src/app/services/interfaces/record.interfaces';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public times!: IRecord[];

    constructor() {
    }

    ngOnInit(): void {
        return;
    }

}
