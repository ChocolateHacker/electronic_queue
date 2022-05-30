import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserViewModel } from '../../../models/user.model';
import { AuthorizedService } from './authorized.servise';



@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public readonly adress: string = 'http://localhost:3000/users/';
    public userList!: UserViewModel[];

    constructor(
        private _http: HttpClient,
        private _auhtorizated: AuthorizedService
    ){
    }

    public getData(): void {
        this._http.get<UserViewModel[]>(this.adress)
            .subscribe((x: UserViewModel[]) => {
                this.userList = x;
            });
    }

    public postUser(user: UserViewModel): Observable<UserViewModel>{
        return this._http.post<UserViewModel>(this.adress, user);
    }

    public putUser(user: UserViewModel):  Observable<UserViewModel>{
        return this._http.put<UserViewModel>(this.adress + this._auhtorizated.userNow.id, {
            name: user.name,
            secondName: user.secondName,
            middleName: user.middleName,
            birthdate: user.birthdate,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password,
            post: this._auhtorizated.userNow.post
        });
    }

    public getUser(id: number): Observable<UserViewModel>{
        return this._http.get<UserViewModel[]>(this.adress)
            .pipe(map((users: UserViewModel[]) => {
                return users.filter((user: UserViewModel) => user.id === id)[0];
            }));
    }

    public getUsers(): Observable<UserViewModel[]> {
        return this._http.get<UserViewModel[]>(this.adress);
    }
}
