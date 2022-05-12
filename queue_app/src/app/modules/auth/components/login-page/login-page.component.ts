import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterLogicService } from '../../services/enter-logic.service';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/models/user.model';
import { AuthorizedService } from '../../services/authorized.servise';



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
        private _router: Router,
        private _enterLogicService: EnterLogicService,
        private _autorizated: AuthorizedService
    ) {
    }

    public ngOnInit(): void {
    }

    public onSubmit(): void{
        this._enterLogicService.getUsers()
            .subscribe({
                next: (x: UserViewModel[]) => {
                    const user: UserViewModel | undefined = x.find((a: UserViewModel) => {
                        return a.email === this.form.value.email && a.password === this.form.value.password;
                    });
                    if(user){
                        this._autorizated.userNow = user;
                        this._router.navigate(['profile/' + this._autorizated.userNow.id]);
                    } else {
                        alert('user not found');
                    }
                }, error: () => {
                    alert('Error');
                }
            });
    }
}
