import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone',
})
export class PhonePipe implements PipeTransform {
    public transform(phoneNumber: string): string {
        let newStr: string = '';
        newStr = phoneNumber[0] + ' (';
        for(let i:number = 1; i < 4; i++){
            newStr = newStr + phoneNumber[i];
        }
        newStr = newStr + ') ';
        for(let i:number = 4; i <= 6; i++){
            newStr = newStr + phoneNumber[i];
        }
        newStr = newStr + '-';
        for(let i:number = 7; i <= 8; i++){
            newStr = newStr + phoneNumber[i];
        }
        newStr = newStr + '-';
        for(let i:number = 9; i < 11; i++){
            newStr = newStr + phoneNumber[i];
        }

        return newStr;
    }
}