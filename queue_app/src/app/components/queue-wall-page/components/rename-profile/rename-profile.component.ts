import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserViewModel } from '../../../../models/user.model';
import { AuthorizedService } from '../../../../modules/auth/services/authorized.servise';
import { fadeTrigger } from '../../../../modules/other/animations/fade.animation';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-rename-profile',
    templateUrl: './rename-profile.component.html',
    styleUrls: ['./styles/rename-profile.component.scss'],
    animations: [fadeTrigger]
})
export class RenameProfileComponent implements OnInit {
    @HostBinding('@fade') public a: boolean = true;
    public form!: FormGroup;
    public newUser!: UserViewModel;

    constructor(
        private _router: Router,
        private _auhtorizated: AuthorizedService,
        private _userService: UserService
    ) {
    }

    public ngOnInit(): void {
        this.getUserInfoFromFrom();
        this.getUser();
    }

    public getUser(): void{
        this.form.get('name')?.patchValue(this._auhtorizated.userNow.name),
        this.form.get('second_name')?.patchValue(this._auhtorizated.userNow.secondName),
        this.form.get('middle_name')?.patchValue(this._auhtorizated.userNow.middleName),
        this.form.get('phone_number')?.patchValue(this._auhtorizated.userNow.phoneNumber),
        this.form.get('password')?.patchValue(this._auhtorizated.userNow.password),
        this.form.get('email')?.patchValue(this._auhtorizated.userNow.email),
        this.form.get('birthdate')?.patchValue(this._auhtorizated.userNow.birthdate);
    }

    public onSubmit(): void {
        this.getNewUser();
        this.pushToServer(this.newUser);
        this.routeUser();
    }

    public get id(): number  {
        return this._auhtorizated.userNow.id;
    }

    private getNewUser(): UserViewModel{
        this.newUser = {
            id: this._auhtorizated.userNow.id,
            name: this.form.value.name,
            secondName: this.form.value.second_name,
            middleName: this.form.value.middle_name,
            birthdate: this.form.value.birthdate,
            email: this.form.value.email,
            phoneNumber: this.form.value.phone_number,
            password: this.form.value.password,
            post: this.form.value.post,
        };

        return this.newUser;
    }

    private getUserInfoFromFrom(): void{
        this.form = new FormBuilder().group({
            name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z\w??-????-??]*')]),
            second_name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z\w??-????-??]*')]),
            middle_name: new FormControl(null, [Validators.pattern('[a-zA-Z\w??-????-??]*')]),
            phone_number: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]{11}')]),
            password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            birthdate: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{2}.[0-9]{2}.[0-9]{4}')]),
        });
    }

    private routeUser():void{
        setTimeout(() =>
            this._router.navigate(['../../../../user/profile/' + this._auhtorizated.userNow.id]),
        500);
    }

    private pushToServer(user: UserViewModel): void{
        this.putUserInfo(user);
        this._auhtorizated.userNow = user;
    }

    private putUserInfo(userInfo: UserViewModel): void{
        this._userService.putUser(userInfo)
            .subscribe({
                error: () => alert('Error')
            });
    }
}