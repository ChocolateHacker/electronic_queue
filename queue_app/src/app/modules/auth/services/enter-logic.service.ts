import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserViewModel } from 'src/app/models/user.model';



@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public readonly adress: string = 'http://localhost:3000/users';
    public userList!: UserViewModel[];

    constructor(private _http: HttpClient){
    }

    public getData(): void {
        this._http.get<UserViewModel[]>(this.adress)
            .subscribe((x: UserViewModel[]) => {
                this.userList = x;
            });
    }

    public getID(id: number): UserViewModel {
        const temp: UserViewModel | undefined = this.userList.find((x: { id: number; }) => x.id === id);
        if (temp) {
            return temp;
        } else {
            throw new Error('error');
        }
    }

    public postUser(user: UserViewModel): Observable<UserViewModel>{
        return this._http.post<UserViewModel>(this.adress, user);
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
