import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableViewModel } from 'src/app/models/table.model';
import { IRecord } from 'src/app/services/interfaces/record.interface';
import { RecordsLogicService } from 'src/app/services/records-logic/records-logic.service';

@Component({
    selector: 'app-table-detail',
    templateUrl: './table-detail.component.html',
    styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent implements OnInit {
    public time!: TableViewModel;
    constructor(
      private _routing: ActivatedRoute,
      private _http: RecordsLogicService
    ) {}

    public ngOnInit(): void {
        this.getInfo();
    }

    public getInfo(): IRecord | undefined {
        const id: number = Number(this._routing.snapshot.paramMap.get('id'));
        this.time = this._http.getID(id);

        return this.time;
    }

}
