import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../user.interfaces';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';




@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public userList!: IUser[];
    private _urlSignupUser: string = 'http://localhost:3000/users';
    private _newUser!: IUser;

    constructor(private _http: HttpClient, private _router: Router){
        setInterval(() => {
            this.getData();
        }, 2000);
    }

    public getData(): any{
        this._http.get<IUser[]>(this._urlSignupUser)
            .subscribe((x: IUser[]) => {
                this.userList = x;
            });
    }

    public getID(id: number): any{
        return this.userList.find((x: { id: number; }) => x.id === id);
    }

    public sendOnServer(registerForm: FormGroup): void {
        this._newUser = {
            id: Math.floor(Math.random() * 999),
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

    public registerUser(registerUserData: FormGroup): void{
        this._http.post<IUser>(this._urlSignupUser, this._newUser)
            .subscribe(() => {
                alert('Signup Successful');
                registerUserData.reset();
            }, () => {
                alert('Error');
            });
    }

    public login(loginUserData: FormGroup): any{
        this._http.get<IUser[]>(this._urlSignupUser)
            .subscribe((x: IUser[]) => {
                const user: IUser | undefined = x.find((a: IUser) => {
                    return a.email === loginUserData.value.email && a.password === loginUserData.value.password;
                });
                if (user) {
                    this._router.navigate(['profile/' + user.id]);
                    loginUserData.reset();
                } else {
                    alert('user not found');
                }
            }, () => {
                alert('Error');
            });
    }
}
