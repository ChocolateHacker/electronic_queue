import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnterLogicService } from '../../services/enter-logic/enter-logic.service';




@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
    public form!: FormGroup;

    constructor(private _http: EnterLogicService, private _router: Router) {
        this.createForm();
    }

    public ngOnInit(): void {
    }

    public onSubmit(): void{
        this.form.disable();
        this._http.sendOnServer(this.form);
        this._router.navigate(['/login']);
    };

    private createForm(): void {
        this.form = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            second_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            phone_number: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            birthdate: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{2}.[0-9]{2}.[0-9]{4}')]),
            telegram: new FormControl(null)
        });
    }
}
