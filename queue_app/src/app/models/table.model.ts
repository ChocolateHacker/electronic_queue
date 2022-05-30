import { IRecord } from './interfaces/record.interface';

export class TableViewModel {
    public id: number;
    public time: string;
    public docName: string;
    public activity: string;
    public userId: number;
    public isFree: boolean;

    constructor(model: IRecord) {
        this.id = model.id;
        this.time = model.time;
        this.docName = model.docName;
        this.activity = model.activity;
        this.userId = model.userId;
        this.isFree = model.isFree;
    }
}