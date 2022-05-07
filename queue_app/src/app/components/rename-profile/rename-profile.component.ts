import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-rename-profile',
    templateUrl: './rename-profile.component.html',
    styleUrls: ['./rename-profile.component.scss']
})
export class RenameProfileComponent implements OnInit {
    public form!: FormGroup;
    constructor() {
    }

    public ngOnInit(): void {
    }

    public onSubmit(): void {
    }
}
