import { IRecord } from 'src/app/models/interfaces/record.interface';

export class TableViewModel {
    public id: number;
    public time: string;
    public docName: string;
    public activity: string;
    public isFree: boolean;

    constructor(model: IRecord) {
        this.id = model.id;
        this.time = model.time;
        this.docName = model.docName;
        this.activity = model.activity;
        this.isFree = model.isFree;
    }
}