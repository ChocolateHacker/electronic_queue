import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableViewModel } from 'src/app/models/table.model';
import { UserViewModel } from 'src/app/models/user.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';
import { EnterLogicService } from 'src/app/modules/auth/services/enter-logic.service';
import { RecordsLogicService } from 'src/app/modules/board/services/records-logic.service';
import { fadeTrigger } from '../../animations/fade.animation';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    animations: [fadeTrigger]
})
export class UserProfileComponent implements OnInit {
    @HostBinding('@fade') public a: boolean = true;
    @Input() public records!: TableViewModel[];
    public user!: UserViewModel;
    public size: number = -1;
    public load: boolean = false;

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
        this.sleep(2);
    }

    public cancelRecord(record: TableViewModel): void{
        this._recordsLogic.putCancelRecord(record, true)
            .subscribe({
                error: () => alert('Error')
            });
    }

    private sleep(seconds: number): void {
        setInterval(() => {
            this.getData();
            this.load = true;
        }, seconds * 1000);
    }

    private getData(): void{
        this._recordsLogic.getRecords()
            .subscribe((records: TableViewModel[]) => {
                this.records = records;
            });
    }
}
