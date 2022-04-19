import { Component, OnInit } from '@angular/core';
import { EnterLogicService } from 'src/app/services/enter-logic/enter-logic.service';
import { IRecord } from 'src/app/services/interfaces/record.interface';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public times!: IRecord[];

    constructor(private _http: EnterLogicService) {

        // this._http.getRecords()
        //     .subscribe((value: IRecord) => {
        //         this.times.push(new TableViewModel(value))
        //     })
    }

    public ngOnInit(): void {
        return;
    }
}