import { Component, OnInit } from '@angular/core';
import { TableViewModel } from 'src/app/models/table.model';
import { RecordsLogicService } from 'src/app/services/records-logic/records-logic.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public times!: TableViewModel[];

    constructor(private _http: RecordsLogicService) {
    }

    public ngOnInit(): void {
        setInterval(() => {
            this.times = this._http.dataList;
        }, 1);
    }
}