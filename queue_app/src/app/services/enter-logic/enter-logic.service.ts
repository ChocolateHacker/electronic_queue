import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';
import { UserViewModel } from 'src/app/models/user.model';




@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public readonly adress: string = 'http://localhost:3000/users';
    public userList!: UserViewModel[];
    private _newUser!: UserViewModel;

    constructor(
        private _http: HttpClient,
        private _router: Router
    ){
        setInterval(() => {
            this.getData();
        }, 2000);
    }

    public getData(): void {
        this._http.get<IUser[]>(this.adress)
            .subscribe((x: IUser[]) => {
                this.userList = x;
            });
    }

    public getID(id: number): IUser {
        const temp: IUser | undefined = this.userList.find((x: { id: number; }) => x.id === id);
        if (temp) {
            return temp;
        } else {
            throw new Error('Сын шлюхи');
        }
    }

    public sendOnServer(registerForm: FormGroup): void {
        this._newUser = {
            id: registerForm.value.id,
            name: registerForm.value.name,
            secondName: registerForm.value.second_name,
            middleName: registerForm.value.middle_name,
            birthdate: registerForm.value.birthdate,
            email: registerForm.value.email,
            phoneNumber: registerForm.value.phone_number,
            password: registerForm.value.password,
            post: registerForm.value.post,
            telegram!:registerForm.value.telegram
        };
        this.registerUser(registerForm);
    }

    public registerUser(registerUserData: FormGroup): void {
        this._http.post<IUser>(this.adress, this._newUser)
            .subscribe(() => {
                alert('Sign up Successful');
            }, () => {
                alert('Error');
            });
    }

    public login(email: string, password: string) : Observable<boolean> {
        return this._http.post<Response>(this.adress, {
            email,
            password,
        }).pipe(switchMap(() => {
            return of(true);
        }));
    }

    // public login(loginUserData: FormGroup): void {
    //     this._http.get<IUser[]>(this.adress)
    //         .subscribe((x: IUser[]) => {
    //             const user: IUser | undefined = x.find((a: IUser) => {
    //                 return a.email === loginUserData.value.email && a.password === loginUserData.value.password;
    //             });
    //             if (user?.post === 'admin') {
    //                 this._router.navigate(['ad-profile/' + user.id]);
    //             } else if (user?.post === 'user') {
    //                 this._router.navigate(['us-profile/' + user.id]);
    //             } else {
    //                 alert('user not found');
    //             }
    //         }, () => {
    //             alert('Error');
    //         });
    // }
}
