import { Injectable, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserViewModel } from '../../../models/user.model';



@Injectable()
export class AuthorizedService {
    @Input() public form!: FormGroup;
    public userNow!: UserViewModel;
    @Output() public authComplete!: boolean;
}