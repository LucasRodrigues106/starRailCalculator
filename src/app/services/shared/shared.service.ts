import { Injectable } from '@angular/core';
import { ICharacter } from 'src/interfaces/ICharacter';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  sumNumberInArray(numberArray: number[]): number {
    if (numberArray.length === 0) return 0;
    return numberArray.reduce((accumulator, current) => accumulator + current);
  }

  async getCharactersList(): Promise<ICharacter[]> {
    return await (await fetch('../../assets/characterList.json')).json() as ICharacter[]
  }

  async getCharacterById(id: string): Promise<ICharacter> {
    return (await this.getCharactersList()).find(character => character.id === id) as ICharacter;
  }

}
