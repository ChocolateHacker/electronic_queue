import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableViewModel } from 'src/app/models/table.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';
import { RecordsLogicService } from '../../services/records-logic.service';

@Component({
    selector: 'app-table-info',
    templateUrl: './table-info.component.html',
    styleUrls: ['./styles/table-info.component.scss']
})
export class TableInfoComponent implements OnInit {
    @Input() public time!: TableViewModel;
    public auth!: boolean;

    constructor(
        private _http: Router,
        private _authorizedService: AuthorizedService,
        private _recordsLogic: RecordsLogicService) { }

    public ngOnInit(): void { }

    public onSubmit(card: TableViewModel): void{
        if(!this._authorizedService.userNow){
            alert('Авторизируйтесь для регистрации');
            this._http.navigate(['/login']);
        } else {
            alert('Вы записались');
            this._recordsLogic.putRecord(this._authorizedService.userNow, card, false)
                .subscribe({
                    error: () => alert('Error')
                });
            this._http.navigate(['/profile/' + this._authorizedService.userNow.id]);
        }
    }
}