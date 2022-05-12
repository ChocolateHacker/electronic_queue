import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableViewModel } from 'src/app/models/table.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';

@Component({
    selector: 'app-table-info',
    templateUrl: './table-info.component.html',
    styleUrls: ['./styles/table-info.component.scss']
})
export class TableInfoComponent implements OnInit {
    @Input() public time!: TableViewModel;

    constructor(
        private _http: Router,
        private _authorizedService: AuthorizedService) { }

    public ngOnInit(): void { }

    public onSubmit(): void{
        if(!this._authorizedService.userNow){
            alert('Авторизируйтесь для регистрации');
            this._http.navigate(['/login']);
        } else {
            alert('Вы записались');
            this.time.userId = this._authorizedService.userNow.id;
            this.time.isFree = false;
            this._http.navigate(['/profile/'+ this._authorizedService.userNow.id]);
        };
    }
}
