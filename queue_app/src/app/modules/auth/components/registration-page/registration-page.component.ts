import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnterLogicService } from '../../service/enter-logic.service';




@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./styles/registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
    public form!: FormGroup;
    public newUser!: any;

    constructor(
        private _http: EnterLogicService,
        private _router: Router
    ) {
        this.createForm();
    }

    public ngOnInit(): void {
        return;
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
            post: this.form.value.post,
            telegram!:this.form.value.telegram
        };
        this.pushToServer(this.newUser);
        this._router.navigate(['/login']);
    };

    private pushToServer(user: FormGroup): void{
        this._http.postUser(user)
            .subscribe({
                next: () => alert('Sign up Successful'),
                error: () => alert('Error')
            });
    }

    private createForm(): void {
        this.form = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            second_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            phone_number: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]{11}')]),
            password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            birthdate: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{2}.[0-9]{2}.[0-9]{4}')]),
            telegram: new FormControl(null)
        });
    }
}
