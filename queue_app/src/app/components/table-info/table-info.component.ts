import { Component, Input, OnInit } from '@angular/core';
import { IRecord } from 'src/app/services/interfaces/record.interface';

@Component({
    selector: 'app-table-info',
    templateUrl: './table-info.component.html',
    styleUrls: ['./styles/table-info.component.scss']
})
export class TableInfoComponent implements OnInit {
    @Input()
    public time!: IRecord;

    constructor() {
    }

    public ngOnInit(): void {
    }

}
