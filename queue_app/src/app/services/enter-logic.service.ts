import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interfaces';
import './userData.json';




@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public userList!: IUser[];

    constructor(private _http: HttpClient){
        return;
    }

    public getData(): void{
        return;
    }

    public getUser(email: string, password: string): void{
        return;
    }
}
