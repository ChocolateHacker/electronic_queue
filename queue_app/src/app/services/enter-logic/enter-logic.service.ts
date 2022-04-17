import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';




@Injectable({
    providedIn: 'root'
})
export class EnterLogicService {
    public userList!: IUser[];
    private _newUser!: IUser;

    constructor(private _http: HttpClient, private _router: Router){
        setInterval(() => {
            this.getData();
        }, 2000);
    }

    public getData(): any{
        this._http.get<IUser[]>('http://localhost:3000/users')
            .subscribe((x: IUser[]) => {
                this.userList = x;
            });
    }

    public getID(id: number): any{
        return this.userList.find((x: { id: number; }) => x.id === id);
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
        this._http.post<IUser>('http://localhost:3000/users', this._newUser)
            .subscribe(() => {
                alert('Sign up Successful');
            }, () => {
                alert('Error');
            });
    }

    public login(loginUserData: FormGroup): void {
        this._http.get<IUser[]>('http://localhost:3000/users')
            .subscribe((x: IUser[]) => {
                const user: IUser | undefined = x.find((a: IUser) => {
                    return a.email === loginUserData.value.email && a.password === loginUserData.value.password;
                });
                if (user?.post === 'admin') {
                    this._router.navigate(['ad-profile/' + user.id]);
                } else if (user?.post === 'user') {
                    this._router.navigate(['us-profile/' + user.id]);
                } else {
                    alert('user not found');
                }
            }, () => {
                alert('Error');
            });
    }
}
