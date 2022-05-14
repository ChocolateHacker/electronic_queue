import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/models/user.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';
import { EnterLogicService } from 'src/app/modules/auth/services/enter-logic.service';

@Component({
    selector: 'app-rename-profile',
    templateUrl: './rename-profile.component.html',
    styleUrls: ['./rename-profile.component.scss']
})
export class RenameProfileComponent implements OnInit {
    public form!: FormGroup;
    public newUser!: UserViewModel;

    constructor(
        private _router: Router,
        private _auhtorizated: AuthorizedService,
        private _enterLogic: EnterLogicService
    ) {
    }

    public ngOnInit(): void {
        this.form = new FormBuilder().group({
            name: new FormControl(null, [Validators.required]),
            second_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            phone_number: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]{11}')]),
            password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            birthdate: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{2}.[0-9]{2}.[0-9]{4}')]),
        });
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
        this.pushToServer(this.newUser);
        setTimeout(() =>
            this._router.navigate(['/profile/' + this._auhtorizated.userNow.id]),
        500);
    }

    public comeback(): void{
        this._router.navigate(['profile/' + this._auhtorizated.userNow.id]);
    }

    private pushToServer(user: UserViewModel): void{
        this._enterLogic.putUser(user)
            .subscribe({
                error: () => alert('Error')
            });
        this._auhtorizated.userNow = user;
    }
}