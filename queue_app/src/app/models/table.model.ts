import { IRecord } from 'src/app/services/interfaces/record.interface';

export class TableViewModel {
    public id: number;
    public name: string;
    public office: string;

    constructor(model: IRecord) {
        this.id = model.id,
        this.name = model.name;
        this.office = model.office;
    }
}