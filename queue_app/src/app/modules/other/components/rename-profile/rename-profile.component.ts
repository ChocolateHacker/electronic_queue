import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/models/user.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';

@Component({
    selector: 'app-rename-profile',
    templateUrl: './rename-profile.component.html',
    styleUrls: ['./rename-profile.component.scss']
})
export class RenameProfileComponent implements OnInit {
    public form!: FormGroup;
    @Input() public user!: FormGroup;
    public newUser!: UserViewModel;

    constructor(
        private _router: Router,
        private _auhtorizated: AuthorizedService
    ) {
    }

    public ngOnInit(): void {
        this.getUser();
    }

    public getUser(): void{
        this.form.value.id = this._auhtorizated.userNow.id,
        this.form.value.name = this._auhtorizated.userNow.name,
        this.form.value.second_name = this._auhtorizated.userNow.secondName,
        this.form.value.middle_name = this._auhtorizated.userNow.middleName,
        this.form.value.birthdate = this._auhtorizated.userNow.birthdate,
        this.form.value.email = this._auhtorizated.userNow.email,
        this.form.value.phone_number = this._auhtorizated.userNow.phoneNumber,
        this.form.value.password = this._auhtorizated.userNow.password,
        this.form.value.post = this._auhtorizated.userNow.post,
        this.form.value.telegram = this._auhtorizated.userNow.telegram;
    }

    public onSubmit(): void {
        this.newUser = {
            id: this.form.value.id,
            name: this.form.value.name,
            secondName: this.form.value.second_name,
            middleName: this.form.value.middle_name,
            birthdate: this.form.value.birthdate,
            email: this.form.value.email,
            phoneNumber: this.form.value.phone_number,
            password: this.form.value.password,
            post: this.form.value.post,
            telegram!:this.form.value.telegram
        };
    }

    public comeback(): void{
        this._router.navigate(['profile/' + this._auhtorizated.userNow.id]);
    }
}
