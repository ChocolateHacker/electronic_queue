export interface IUser{
  [x: string]: any;
  id: number,
  name: string,
  secondName: string,
  middleName: string,
  birthdate: string,
  email: string,
  phoneNumber: number,
  password: string,
  post: string,
  telegram?:string
}
