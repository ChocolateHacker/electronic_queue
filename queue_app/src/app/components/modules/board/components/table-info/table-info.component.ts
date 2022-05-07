import { Component, Input, OnInit } from '@angular/core';
import { TableViewModel } from 'src/app/models/table.model';

@Component({
    selector: 'app-table-info',
    templateUrl: './table-info.component.html',
    styleUrls: ['./styles/table-info.component.scss']
})
export class TableInfoComponent implements OnInit {
    @Input()
    public time!: TableViewModel;

    constructor() { }

    public ngOnInit(): void { }

}
