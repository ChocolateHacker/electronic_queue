import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TableViewModel } from '../../../../models/table.model';
import { AuthorizedService } from '../../../auth/services/authorized.servise';
import { RecordsLogicService } from '../../services/records-logic.service';

@Component({
    selector: 'app-table-info',
    templateUrl: './table-info.component.html',
    styleUrls: ['./styles/table-info.component.scss']
})
export class TableInfoComponent{
    @Input() public time!: TableViewModel;
    public auth!: boolean;

    constructor(
        private _http: Router,
        private _authorizedService: AuthorizedService,
        private _recordsLogic: RecordsLogicService
    ) {
    }

    public onSubmit(card: TableViewModel): void{
        if(!this._authorizedService.userNow){
            alert('Авторизируйтесь для регистрации');
            this._http.navigate(['/login']);
        } else {
            this.putRecordInfo(card);
            alert('Вы записались');
            this._http.navigate(['user/profile/' + this._authorizedService.userNow.id]);
        }
    }

    private putRecordInfo(card: TableViewModel):void{
        this._recordsLogic.putRecord(this._authorizedService.userNow, card, false)
            .subscribe({
                error: () => alert('Error')
            });
    }
}