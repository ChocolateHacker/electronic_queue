import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterLogicService } from '../../service/enter-logic.service';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/models/user.model';



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
        private _enterLogicService: EnterLogicService
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
                    if (user?.post === 'admin') {
                        this._router.navigate(['ad-profile/' + user.id]);
                    } else if (user?.post === 'user') {
                        this._router.navigate(['us-profile/' + user.id]);
                    } else {
                        alert('user not found');
                    }
                }, error: () => {
                    alert('Error');
                }
            });
    }
}
