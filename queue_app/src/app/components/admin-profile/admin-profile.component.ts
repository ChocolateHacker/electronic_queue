import { Component, OnInit } from '@angular/core';
import { IUser } from '../../services/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { EnterLogicService } from '../../services/enter-logic/enter-logic.service';

@Component({
    selector: 'app-admin-profile',
    templateUrl: './admin-profile.component.html',
    styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
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
