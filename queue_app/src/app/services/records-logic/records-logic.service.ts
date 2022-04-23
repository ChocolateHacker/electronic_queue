import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { IRecord } from '../interfaces/record.interface';




@Injectable({
    providedIn: 'root'
})
export class RecordsLogicService {
    public adress: string = 'http://localhost:3000/records';
    public dataList!: IRecord[];

    constructor(
        private _http: HttpClient,
        private _router: Router
    ){
        setInterval(() => {
            this.getData();
        }, 2000);
    }

    public getData(): void {
        this._http.get<IRecord[]>(this.adress)
            .subscribe((x: IRecord[]) => {
                this.dataList = x;
            });
    }

    public getID(id: number): IRecord {
        const temp: IRecord | undefined = this.dataList.find((x: { id: number; }) => x.id === id);
        if (temp) {
            return temp;
        } else {
            throw new Error('Сын шлюхи (Привет от Геры)');
        }
    }
}
