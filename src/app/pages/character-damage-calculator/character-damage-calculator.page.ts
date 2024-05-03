import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ICharacter } from 'src/interfaces/ICharacter';

@Component({
  selector: 'app-character-damage-calculator',
  templateUrl: './character-damage-calculator.page.html',
  styleUrls: ['./character-damage-calculator.page.scss'],
})
export class CharacterDamageCalculatorPage implements OnInit {

  character: ICharacter = {
    id: '',
    iconImage: '',
    name: '',
    rarity: 0,
    path: '',
    damageType: '',
    skills: []
  };
  constructor(
    private route: Router,
    private sharedService: SharedService
  ) { }

  async ngOnInit() {
    let characterId = '';
    this.route.routerState.root.queryParams.subscribe(async (params) => {
      characterId = params['characterId'];
    }).unsubscribe();
    this.character = await this.sharedService.getCharacterById(characterId);
    
  }

}
