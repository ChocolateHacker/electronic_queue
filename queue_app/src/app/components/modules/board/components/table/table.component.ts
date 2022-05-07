import { Component, OnInit } from '@angular/core';
import { TableViewModel } from 'src/app/models/table.model';
import { IRecord } from 'src/app/models/interfaces/record.interface';
import { RecordsLogicService } from 'src/app/components/modules/board/services/records-logic.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public records!: TableViewModel[];
    public load: boolean = false;

    constructor(private _http: RecordsLogicService) {
    }

    public ngOnInit(): void {
        this.sleep(2);
    }

    private sleep(seconds: number): void {
        setInterval(() => {
            this.getData();
            this.load = true;
        }, seconds * 1000);
    }

    private getData(): void{
        this._http.getRecords()
            .subscribe((records: IRecord[]) => {
                this.records = records;
            });
    }
}