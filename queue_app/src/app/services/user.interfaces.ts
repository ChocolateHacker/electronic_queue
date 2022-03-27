export interface IUser{
  id: number,
  name: string,
  secondName: string,
  middleName: string,
  birthdate: string
  email: string,
  phoneNumber: bigint,
  password: string,
  post: string,
  telegram?:string
}
