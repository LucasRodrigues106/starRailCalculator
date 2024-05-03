import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/interfaces/ICharacter';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.page.html',
  styleUrls: ['./list-characters.page.scss'],
})
export class ListCharactersPage implements OnInit {

  charactersList: ICharacter[] = [];

  constructor() { }

  async ngOnInit() {
    this.charactersList = await (await fetch('../../assets/characterList.json')).json() as ICharacter[];
    console.log(this.charactersList);
  }

}
