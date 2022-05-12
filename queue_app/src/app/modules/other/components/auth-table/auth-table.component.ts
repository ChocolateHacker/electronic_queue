import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableViewModel } from 'src/app/models/table.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';
import { RecordsLogicService } from 'src/app/modules/board/services/records-logic.service';

@Component({
    selector: 'app-table',
    templateUrl: './auth-table.component.html',
    styleUrls: ['./auth-table.component.scss']
})
export class AuthTableComponent implements OnInit {

    public records!: TableViewModel[];
    public load: boolean = false;
    public size: number = 3;
    public showAll: boolean = false;
    public showButton: boolean = false;

    constructor(
        private _http: RecordsLogicService,
        private _router: Router,
        private _auhtorizated: AuthorizedService
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

    public comeback(): void{
        this._router.navigate(['profile/' + this._auhtorizated.userNow.id]);
    }

    private sleep(seconds: number): void {
        setInterval(() => {
            this.getData();
            this.load = true;
        }, seconds * 1000);
    }

    private getData(): void{
        this._http.getRecords()
            .subscribe((records: TableViewModel[]) => {
                this.records = records;
            });
    }
}