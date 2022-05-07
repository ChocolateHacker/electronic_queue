import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/interfaces/user.interface';
import { EnterLogicService } from '../modules/auth/service/enter-logic.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    public user!: IUser | undefined;

    constructor(
        private _routing: ActivatedRoute,
        private _http: EnterLogicService
    ) {
    }

    public ngOnInit(): void {
        const id: number = Number(this._routing.snapshot.paramMap.get('id'));
        this._http.getUser(id)
            .subscribe((user: IUser) => {
                this.user = user;
            });
    }

}
