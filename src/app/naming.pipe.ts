import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naming'
})
export class NamingPipe implements PipeTransform {
  transform(value: number, arr:[string, string, string]): string {
    if(this.define(value) === 1) {
      return value + ' ' + arr[0]
    }

    if(this.define(value) > 1 && value < 5) {
      return value + ' ' + arr[1]
    } else {
      return value + ' ' + arr[2]
    }
  }

  define(value:number):number {
    if(value > 20) {
      return value % 10
    } else {
      return value
    }
  }

//   transform(value: number): string {
//     if (value === 1) {
//       return `${value} штука`;
//     } else if (value > 1 && value < 5) {
//       return `${value} штуки`;
//     } else {
//       const lastTwoDigits = value % 100;
//       if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
//         return `${value} штук`;
//       } else {
//         const lastDigit = value % 10;
//         if (lastDigit === 1) {
//           return `${value} штука`;
//         } else if (lastDigit >= 2 && lastDigit <= 4) {
//           return `${value} штуки`;
//         } else {
//           return `${value} штук`;
//         }
//       }
//     }
// }


}
