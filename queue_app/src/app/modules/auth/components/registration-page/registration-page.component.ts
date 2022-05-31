import { Component, HostBinding, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserViewModel } from '../../../../models/user.model';
import { fadeTrigger } from '../../../../modules/other/animations/fade.animation';
import { EnterLogicService } from '../../services/enter-logic.service';




@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./styles/registration-page.component.scss'],
    animations: [fadeTrigger]
})
export class RegistrationPageComponent{
    @HostBinding('@fade') public a: boolean = true;
    public form!: FormGroup;
    @Output() public newUser!: UserViewModel;

    constructor(
        private _http: EnterLogicService,
        private _router: Router
    ) {
        this.createForm();
    }

    public onSubmit(): void{
        this.form.disable();
        this.newUser = {
            id: this.form.value.id,
            name: this.form.value.name,
            secondName: this.form.value.second_name,
            middleName: this.form.value.middle_name,
            birthdate: this.form.value.birthdate,
            email: this.form.value.email,
            phoneNumber: this.form.value.phone_number,
            password: this.form.value.password,
            post: this.form.value.post
        };
        this.pushToServer(this.newUser);
        this._router.navigate(['/account/login']);
    };

    private createForm(): void {
        this.form = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z\wа-яА-Я]*')]),
            second_name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z\wа-яА-Я]*')]),
            middle_name: new FormControl(null, [Validators.pattern('[a-zA-Z\wа-яА-Я]*')]),
            phone_number: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]{11}')]),
            password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            birthdate: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{2}.[0-9]{2}.[0-9]{4}')])
        });
    }

    private pushToServer(user: UserViewModel): void{
        this._http.postUser(user)
            .subscribe({
                next: () => alert('Sign up Successful'),
                error: () => alert('Not push')
            });
    }
}
