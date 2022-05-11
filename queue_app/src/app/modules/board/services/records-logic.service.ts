import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TableViewModel } from 'src/app/models/table.model';




@Injectable({
    providedIn: 'root'
})
export class RecordsLogicService {
    public adress: string = 'http://localhost:3000/records';
    public records!: TableViewModel[];

    constructor(private _http: HttpClient){
    }

    public getData(): void {
        this._http.get<TableViewModel[]>(this.adress)
            .subscribe((x: TableViewModel[]) => {
                this.records = x;
            });
    }

    public getID(id: number): TableViewModel {
        const temp: TableViewModel | undefined = this.records.find((x: { id: number; }) => x.id === id);
        if (temp) {
            return temp;
        } else {
            throw new Error('Error');
        }
    }

    public getRecords(): Observable<TableViewModel[]> {
        return this._http.get<TableViewModel[]>(this.adress);
    }

    public getRecord(id: number): Observable<TableViewModel> {
        return this._http.get<TableViewModel[]>(this.adress)
            .pipe(map((records: TableViewModel[]) => {
                return records.filter((user: TableViewModel) => user.id === id)[0];
            }));
    }
}

