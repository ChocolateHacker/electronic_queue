import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableViewModel } from '../../../../models/table.model';
import { UserViewModel } from '../../../../models/user.model';
import { AuthorizedService } from '../../../../modules/auth/services/authorized.servise';
import { RecordsLogicService } from '../../../../modules/board/services/records-logic.service';
import { fadeTrigger } from '../../../../modules/other/animations/fade.animation';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./styles/user-profile.component.scss'],
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
        private _userService: UserService,
        private _recordsLogic: RecordsLogicService,
        private _autorizated: AuthorizedService
    ) {
    }

    public ngOnInit(): void {
        const id: number = Number(this._routing.snapshot.paramMap.get('id'));
        this.getUserInfo(id);
        this.user = this._autorizated.userNow;
        this.sleep(2);
    }

    public cancelRecord(record: TableViewModel): void{
        this._recordsLogic.putCancelRecord(record, true)
            .subscribe({
                error: () => alert('Error')
            });
    }

    public sleep(seconds: number): void {
        setTimeout(() => {
            this.getData();
            this.load = true;
        }, seconds * 1000);
    }

    public get checkRecordByUser(): boolean{
        let checkComplete: boolean = false;
        this.records?.forEach((record: TableViewModel) => {
            if(record.userId && record.userId === this._autorizated.userNow.id){
                checkComplete = true;
            };
        });

        return checkComplete;
    }

    private getUserInfo(id: number): void{
        this._userService.getUser(id)
            .subscribe((user: UserViewModel) => {
                this._autorizated.userNow = user;
                this.user = user;
            });
    }

    private getData(): void{
        this._recordsLogic.getRecords()
            .subscribe((records: TableViewModel[]) => {
                this.records = records;
            });
    }
}
