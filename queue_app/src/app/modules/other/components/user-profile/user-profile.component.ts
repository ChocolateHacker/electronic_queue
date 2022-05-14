import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableViewModel } from 'src/app/models/table.model';
import { UserViewModel } from 'src/app/models/user.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';
import { EnterLogicService } from 'src/app/modules/auth/services/enter-logic.service';
import { RecordsLogicService } from 'src/app/modules/board/services/records-logic.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    @Input() public records!: TableViewModel[];
    public user!: UserViewModel | undefined;
    public size: number = -1;

    constructor(
        private _routing: ActivatedRoute,
        private _enterLogicService: EnterLogicService,
        private _recordsLogic: RecordsLogicService,
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
        this._recordsLogic.getRecords()
            .subscribe((record: TableViewModel[]) => {
                this.records = record;
            });
    }
}
