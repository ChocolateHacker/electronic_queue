import { IUser } from '../services/interfaces/user.interface';

export class UserViewModel{
    [x: string]: any;
    public id: number;
    public name: string;
    public secondName: string;
    public middleName: string;
    public birthdate: string;
    public email: string;
    public phoneNumber: number;
    public password: string;
    public post: string;
    public telegram?:string;


    constructor(model: IUser) {
        this.id = model.id;
        this.name = model.name;
        this.secondName = model.secondName;
        this.middleName = model.middleName;
        this.birthdate = model.birthdate;
        this.email = model.email;
        this.phoneNumber = model.phoneNumber;
        this.password = model.password;
        this.post = model.post;
        this.telegram = model.telegram;
    }
}