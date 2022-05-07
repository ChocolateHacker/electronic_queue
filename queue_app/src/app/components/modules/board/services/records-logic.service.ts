import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IRecord } from '../../../../models/interfaces/record.interface';
import { map, Observable } from 'rxjs';




@Injectable({
    providedIn: 'root'
})
export class RecordsLogicService {
    public adress: string = 'http://localhost:3000/records';
    public records!: IRecord[];

    constructor(
        private _http: HttpClient,
        private _router: Router
    ){
    }

    public getData(): void {
        this._http.get<IRecord[]>(this.adress)
            .subscribe((x: IRecord[]) => {
                this.records = x;
            });
    }

    public getID(id: number): IRecord {
        const temp: IRecord | undefined = this.records.find((x: { id: number; }) => x.id === id);
        if (temp) {
            return temp;
        } else {
            throw new Error('Error');
        }
    }

    public getRecords(): Observable<IRecord[]> {
        return this._http.get<IRecord[]>(this.adress);
    }

    public getRecord(id: number): Observable<IRecord> {
        return this._http.get<IRecord[]>(this.adress)
            .pipe(map((records: IRecord[]) => {
                return records.filter((user: IRecord) => user.id === id)[0];
            }));
    }
}

