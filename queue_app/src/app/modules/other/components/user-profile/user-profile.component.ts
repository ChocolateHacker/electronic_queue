import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserViewModel } from 'src/app/models/user.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';
import { EnterLogicService } from 'src/app/modules/auth/services/enter-logic.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    public user!: UserViewModel | undefined;
    RenameProfileComponent: any;

    constructor(
        private _routing: ActivatedRoute,
        private _enterLogicService: EnterLogicService,
        private _autorizated: AuthorizedService
    ) {
    }

    public ngOnInit(): void {
        const id: number = Number(this._routing.snapshot.paramMap.get('id'));
        this._enterLogicService.getUser(id)
            .subscribe((user: UserViewModel) => {
                this._autorizated.userNow = user;
                this.user = user;
            });
        this.user = this._autorizated.userNow;
    }
}
