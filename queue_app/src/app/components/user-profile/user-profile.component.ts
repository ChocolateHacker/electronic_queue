import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnterLogicService } from 'src/app/services/enter-logic/enter-logic.service';
import { IUser } from '../../services/user.interfaces';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    public user!: IUser | undefined;

    constructor(private _routing: ActivatedRoute, private _http: EnterLogicService) {
        return;
    }

    public ngOnInit(): void {
        this.getInfo();
    }

    public getInfo(): IUser | undefined {
        const id: number = Number(this._routing.snapshot.paramMap.get('id'));
        this.user = this._http.getID(id);

        return this.user;
    }

}
