import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TableViewModel } from 'src/app/models/table.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';
import { RecordsLogicService } from 'src/app/modules/board/services/records-logic.service';
import { fadeTrigger } from '../../../../modules/other/animations/fade.animation';

@Component({
    selector: 'app-table',
    templateUrl: './auth-table.component.html',
    styleUrls: ['./auth-table.component.scss'],
    animations: [fadeTrigger]
})
export class AuthTableComponent implements OnInit {
    @HostBinding('@fade') public a: boolean = true;
    @Input() public time!: TableViewModel;
    public records!: TableViewModel[];
    public load: boolean = false;
    public size: number = 3;
    public showAll: boolean = false;
    public showButton: boolean = false;

    constructor(
        private _recordsLogic: RecordsLogicService,
        private _authorizedService: AuthorizedService
    ) {
    }

    public ngOnInit(): void {
        this.sleep(2);
    }

    public onSubmit(): void {
        this.showAll = false;
        this.size = -1;
        this.showButton = true;
    }

    public get id(): number  {
        return this._authorizedService.userNow.id;
    }

    private sleep(seconds: number): void {
        setTimeout(() => {
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