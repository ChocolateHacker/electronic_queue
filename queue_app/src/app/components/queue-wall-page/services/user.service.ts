import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserViewModel } from 'src/app/models/user.model';
import { AuthorizedService } from 'src/app/modules/auth/services/authorized.servise';

@Injectable()
export class UserService {

    public readonly adress: string = 'http://localhost:3000/users/';

    constructor(
      private _auhtorizated: AuthorizedService,
      private _http: HttpClient
    ) {}

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
}
