import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TableViewModel } from 'src/app/models/table.model';
import { UserViewModel } from 'src/app/models/user.model';




@Injectable({
    providedIn: 'root'
})
export class RecordsLogicService {
    public adress: string = 'http://localhost:3000/records/';
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
                return records.filter((record: TableViewModel) => record.id === id)[0];
            }));
    }

    public putRecord(user: UserViewModel, card: TableViewModel, free: boolean): Observable<TableViewModel>{
        return this._http.put<TableViewModel>(this.adress + card.id, {
            id: card.id,
            time: card.time,
            docName: card.docName,
            activity: card.activity,
            userId: user.id,
            isFree: free
        });
    }

    public putCancelRecord(card: TableViewModel, free: boolean): Observable<TableViewModel>{
        return this._http.put<TableViewModel>(this.adress + card.id, {
            id: card.id,
            time: card.time,
            docName: card.docName,
            activity: card.activity,
            userId: 0,
            isFree: free
        });
    }
}
