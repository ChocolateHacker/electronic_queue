import { IUser } from './user.interfaces';

export class Mockes{
    constructor(){
        const data: IUser[] = [
            {
                'id': 1,
                'name': 'Всеволод',
                'secondName': 'Пятков',
                'middleName': 'Константинович',
                'birthdate': '23.02.2002',
                'email': 'vsev@mail.ru',
                'phoneNumber': 89752157623,
                'password': '1234554321',
                'post': 'author',
                'telegram': ''
            },
            {
                'id': 2,
                'name': 'Александр',
                'secondName': 'Пушкин',
                'middleName': 'Сергеевич',
                'birthdate': '06.07.1799',
                'email': 'alex.pushka@yandex.ru',
                'phoneNumber': 89752156021,
                'password': 'scratchingtheheart',
                'post': 'main-admin',
                'telegram': ''
            },
            {
                'id': 3,
                'name': 'Марк',
                'secondName': 'Цукерберг',
                'middleName': '',
                'birthdate': '14.05.1984',
                'email': 'Hack.Facebook@gmail.com',
                'phoneNumber': 94752850274,
                'password': 'IHateGoogle',
                'post': 'admin',
                'telegram': '@instagramOneLove'
            },
            {
                'id': 4,
                'name': 'Георгий',
                'secondName': 'Сучков',
                'middleName': '',
                'birthdate': '20.03.2002',
                'email': 'astral.step@mail.ru',
                'phoneNumber': 89827515734,
                'password': 'Arealghoul',
                'post': 'user',
                'telegram': '@ghoul'
            }
        ];
    }
}
