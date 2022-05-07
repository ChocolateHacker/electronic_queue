import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterLogicService } from '../../service/enter-logic.service';
import { RouterModule } from '@angular/router';



@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./styles/login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(7)])
    });
    public email!: string;
    public password!: string;

    constructor(
        public authorization: EnterLogicService,
        private _router: RouterModule,
        private _http: EnterLogicService
    ) {
    }

    public ngOnInit(): void {
    }

    public onSubmit(): void{
        this._http.login(this.form);
        // this.authorization.login(
        //     this.form.controls['email'].value,
        //     this.form.controls['password'].value)
        //     .subscribe(() => {
        //         this._router.navigate['ad-profile/' + user.id];
        //     });
    }
}
