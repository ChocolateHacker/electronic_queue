import { Component, OnInit } from '@angular/core';
import { IRecord } from 'src/app/services/interfaces/record.interface';
import { RecordsLogicService } from 'src/app/services/records-logic/records-logic.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public times!: IRecord[];

    constructor(private _http: RecordsLogicService) {
    }

    public ngOnInit(): void {
        setInterval(() => {
            this.times = this._http.dataList;
        }, 1);
    }
}