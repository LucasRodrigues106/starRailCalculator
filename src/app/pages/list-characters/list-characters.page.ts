import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ICharacter } from 'src/interfaces/ICharacter';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.page.html',
  styleUrls: ['./list-characters.page.scss'],
})
export class ListCharactersPage implements OnInit {

  charactersList: ICharacter[] = [];

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  async ngOnInit() {
    this.charactersList = await this.sharedService.getCharactersList();
  }

  goToCharacterDamageCalulatorPage(character: ICharacter) {
    this.router.navigate(['/character-damage-calculator'], { queryParams: { characterId: character.id }, });
  }

}
