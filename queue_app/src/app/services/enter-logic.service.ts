import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interfaces';
import * as data from './userData.json';




@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public userList!: IUser[];
    public datas: string = JSON.stringify(data);

    constructor(private _http: HttpClient){
        return;
    }

    public getData(): any{
        return this.datas;
    }

    public getBigData(): any{
        this.getData().subscribe((x: IUser[]) => {
            this.userList = x;
        });
    }

    public getID(id: number): any{
        return this.userList.find(x => x.id === id);
    }

    public registerUser(userData: FormData): void{
        return;
    }

    public login(getingData: string): boolean | undefined{
        return this.datas.includes(getingData);
    }
}
