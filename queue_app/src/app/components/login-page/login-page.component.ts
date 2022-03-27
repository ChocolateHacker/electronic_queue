import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterLogicService } from '../../services/enter-logic.service';




@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public form!: FormGroup;
    public email!: string;
    public password!: string;

    constructor(private _http: EnterLogicService) {
        return;
    }

    public ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(7)])
        });
    }

    public onSubmit(): void{
        if(this._http.login(this.form.value.email) && this._http.login(this.form.value.password)){
            this.form.disable();
            console.log('Вход выполнен');
        }
        this.form.enable();
    }
}
