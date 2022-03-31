import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interfaces';
import * as data from './mocks';




@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public userList!: any;

    constructor(private _http: HttpClient){
        this.userList = data;
    }

    public getData(): any{
        return this.userList;
    }

    public getID(id: number): any{
        return this.userList.find((x: { id: number; }) => x.id === id);
    }

    public registerUser(userData: FormData): void{
        this.userList.append(userData);
    }

    public login(getingData: string): boolean | undefined{
        return this.userList.includes(getingData);
    }
}
