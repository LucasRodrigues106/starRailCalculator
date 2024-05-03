import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  sumNumberInArray(numberArray: number[]): number {
    if (numberArray.length === 0) return 0;
    return numberArray.reduce((accumulator, current) => accumulator + current);
  }
}
