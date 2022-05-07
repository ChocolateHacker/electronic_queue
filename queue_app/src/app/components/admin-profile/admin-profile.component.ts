import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { EnterLogicService } from '../modules/auth/service/enter-logic.service';

@Component({
    selector: 'app-admin-profile',
    templateUrl: './admin-profile.component.html',
    styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
    public user!: IUser | undefined;

    constructor(
        private _routing: ActivatedRoute,
        private _http: EnterLogicService
    ) {
        return;
    }

    public ngOnInit(): void {
        const id: number = Number(this._routing.snapshot.paramMap.get('id'));
        this._http.getUser(id)
            .subscribe((user: IUser) => {
                this.user = user;
            });
    }
}
