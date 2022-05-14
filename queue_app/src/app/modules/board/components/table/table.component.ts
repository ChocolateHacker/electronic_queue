import { Component, OnInit } from '@angular/core';
import { TableViewModel } from 'src/app/models/table.model';
import { RecordsLogicService } from '../../services/records-logic.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

    public records!: TableViewModel[];
    public load: boolean = false;
    public size: number = 3;
    public showAll: boolean = false;
    public showButton: boolean = false;
    public auth: boolean = false;

    constructor(private _recordsLogic: RecordsLogicService) {
    }

    public ngOnInit(): void {
        this.sleep(2);
    }

    public onSubmit(): void {
        this.showAll = false;
        this.size = -1;
        this.showButton = true;
    }

    private sleep(seconds: number): void {
        setInterval(() => {
            this.getData();
            this.load = true;
        }, seconds * 1000);
    }

    private getData(): void{
        this._recordsLogic.getRecords()
            .subscribe((records: TableViewModel[]) => {
                this.records = records;
            });
    }
}