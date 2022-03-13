import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "./user.interfaces";

@Injectable({
  providedIn: 'root'
})
export class EnterLogicService {
  userList!: IUser[]

  constructor(private http: HttpClient) { }

  getData(){
    this.http.get<IUser[]>('api/userData.json')
      .subscribe(x => {
        this.userList = x
      })
  }

  getUser(email: string, password: string){

  }
}
