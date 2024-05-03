import { SharedService } from './../../services/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { DamageService } from 'src/app/services/damage/damage.service';
import { ResistanceService } from 'src/app/services/resistance/resistance.service';

@Component({
  selector: 'app-damage-calculator',
  templateUrl: './damage-calculator.page.html',
  styleUrls: ['./damage-calculator.page.scss'],
})
export class DamageCalculatorPage implements OnInit {

  // https://honkai-star-rail.fandom.com/wiki/Damage

  description: string = '';
  //ainda precisa mostrar o dano causado na tela
  damageHistory: number[] = []

  skillMultiplier: number = 0;
  scallingAtribute: number = 0;

  causedCrit: boolean = false;
  critDamage: number = 0;

  elementalDamage: number = 0;
  damageBoost: number = 0;
  allDamageBoost: number[] = [];//buff de ataque extra,pericia,atq basico

  enemyLevel: number = 0;
  characterLevel: number = 0;
  reductionDefense: number = 0;
  reductionsEnemyDefense: number[] = [];
  ignoreDefense: number = 0;
  ignoredEnemyDefenses: number[] = [];

  weakAgainstTheElement: boolean = false;
  characterResistancePenetration: number = 0;
  decreaseResistanceEnemy: number = 0;

  vulnerability: number = 0;
  allTypesVulnerabilities: number[] = [];//inimigos sofrem mais dano(ex.:topaz pericia => o inimigo marcado sofre mais dano de ataques extras)

  weaknessBroken: boolean = false;

  constructor(
    private damageService: DamageService,
    private resistanceService: ResistanceService,
    public sharedService: SharedService
  ) {

  }

  ngOnInit(): void {

  }

  clara() {
    // colocar variavel de vunerabilidade
    //16651 9517
    //15810
    this.description = "Clara Talento";

    this.skillMultiplier = 160;
    this.scallingAtribute = 3252;

    this.causedCrit = true;
    this.critDamage = 147.8;

    this.elementalDamage = 63.2;
    this.damageBoost = 0;
    this.allDamageBoost = [24,30];

    this.enemyLevel = 82;
    this.characterLevel = 80;
    this.reductionsEnemyDefense = [];
    this.ignoredEnemyDefenses = [];

    this.weakAgainstTheElement = false;
    this.characterResistancePenetration = 0;

    this.allTypesVulnerabilities = [];

    this.weaknessBroken = false;
  }

  huohuo() {
    //1840
    //1840
    this.skillMultiplier = 45;
    this.scallingAtribute = 5883;

    this.causedCrit = false;
    this.critDamage = 0;

    this.elementalDamage = 0;
    this.damageBoost = 0;
    this.allDamageBoost = [];

    this.enemyLevel = 82;
    this.characterLevel = 80;
    this.reductionsEnemyDefense = [];
    this.ignoredEnemyDefenses = [];

    this.weakAgainstTheElement = true;
    this.characterResistancePenetration = 0;

    this.weaknessBroken = false;
  }

  topaz() {
    // colocar variavel de vunerabilidade
    //16651 9517
    //15810
    this.description = "Topaz Pericia";

    this.skillMultiplier = 150;
    this.scallingAtribute = 2863;

    this.causedCrit = true;
    this.critDamage = 167.9;

    this.elementalDamage = 61.2;
    this.damageBoost = 0;
    this.allDamageBoost = [65];

    this.enemyLevel = 82;
    this.characterLevel = 80;
    this.reductionsEnemyDefense = [];
    this.ignoredEnemyDefenses = [];

    this.weakAgainstTheElement = false;
    this.characterResistancePenetration = 0;

    this.allTypesVulnerabilities = [50];

    this.weaknessBroken = false;
  }

  seele() {
    //12330
    //12320
    this.skillMultiplier = 220;
    this.scallingAtribute = 3154;

    this.causedCrit = true;
    this.critDamage = 180.2;

    this.elementalDamage = 48.8;
    this.damageBoost = 0;
    this.allDamageBoost = [20];

    this.enemyLevel = 82;
    this.characterLevel = 80;
    this.reductionsEnemyDefense = [];
    this.ignoredEnemyDefenses = [10];
    this.decreaseResistanceEnemy = 0;

    this.weakAgainstTheElement = false;
    this.characterResistancePenetration = 0;

    this.weaknessBroken = false;
  }

  clearInformations() {
    this.skillMultiplier = 0;
    this.scallingAtribute = 0;

    this.causedCrit = false;
    this.critDamage = 0;

    this.elementalDamage = 0;
    this.damageBoost = 0;
    this.allDamageBoost = [];

    this.enemyLevel = 0;
    this.characterLevel = 0;
    this.reductionsEnemyDefense = [];
    this.ignoredEnemyDefenses = [];

    this.weakAgainstTheElement = false;
    this.characterResistancePenetration = 0;
    this.decreaseResistanceEnemy = 0;

    this.weaknessBroken = false;
  }

  addBoostDamage() {
    this.allDamageBoost.push(this.damageBoost);
  }
  addReductionDefenseEnemy() {
    this.reductionsEnemyDefense.push(this.reductionDefense);
  }
  addIgnoreEnemyDefense() {
    this.ignoredEnemyDefenses.push(this.ignoreDefense);
  }
  addDamageHistory(damage: number) {
    this.damageHistory.push(damage);

    if (this.damageHistory.length > 2) {
      this.damageHistory.splice(0, 1);
    }
    console.log(this.damageHistory);
  }

  removeAllBoostDamage() {
    this.allDamageBoost = [];
  }
  removeReductionDefenseEnemy() {
    this.reductionsEnemyDefense = [];
  }
  removeIgnoreEnemyDefense() {
    this.ignoredEnemyDefenses = [];
  }

  damageCalculator() {
    const baseDamageAttacker = this.damageService.baseDamageAttacker(this.skillMultiplier, 0, this.scallingAtribute, 0);
    const critMultiplierAttacker = this.damageService.critMultiplierAttacker(this.causedCrit, this.critDamage);
    const damageBoostMultiplierAttacker = this.damageService.damageBoostMultiplierAttacker(this.elementalDamage, this.allDamageBoost, 0);
    const weakenMultiplierAttacker = 1; //não tenho certeza se tem algum mob que cause fraqueza(reduzir o dano), se houver o calculo é 1 - Weaken. ex.: 1 - 30%.
    const defenseMultiplierEnemy = this.resistanceService.defenseMultiplierEnemy(this.enemyLevel, this.characterLevel, this.reductionsEnemyDefense, this.ignoredEnemyDefenses);
    const resistanceMultiplierEnemy = this.resistanceService.resistanceMultiplierEnemy(this.weakAgainstTheElement, this.characterResistancePenetration, this.decreaseResistanceEnemy);
    const vulnerabilityMultiplierEnemy = this.resistanceService.vulnerabilityMultiplierEnemy(0, this.allTypesVulnerabilities, 0);
    const brokenMultiplier = this.resistanceService.brokenMultiplier(this.weaknessBroken);

    const finalDamage = +(baseDamageAttacker * critMultiplierAttacker * damageBoostMultiplierAttacker * weakenMultiplierAttacker * defenseMultiplierEnemy * resistanceMultiplierEnemy * vulnerabilityMultiplierEnemy * brokenMultiplier).toFixed();
    //possui uma pequena margem de erro 
    this.addDamageHistory(finalDamage)

  }
}
