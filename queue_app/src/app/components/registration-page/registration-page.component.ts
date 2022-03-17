import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterLogicService } from '../../services/enter-logic.service';




@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
    public form!: FormGroup;

    constructor(private _http: EnterLogicService) {
        this._http.getData();
    }

    public ngOnInit(): void {
        this.form = new FormGroup({
            phone_number: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            name: new FormControl(null, [Validators.required]),
            second_name: new FormControl(null, [Validators.required]),
            birthdate: new FormControl(null, [Validators.required]),
            telegram: new FormControl(null, [Validators.required])
        });
    }
    public onSubmit(): void{
        this.form.disable();
        this._http.getData();
    };
}
