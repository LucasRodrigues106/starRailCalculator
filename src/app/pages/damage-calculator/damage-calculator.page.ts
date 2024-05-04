import { maskitoTransform } from '@maskito/core';
import { SharedService } from './../../services/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import maskNumberPercentage from 'src/app/maskInput/maskNumberPercentage';
import { DamageService } from 'src/app/services/damage/damage.service';
import { ResistanceService } from 'src/app/services/resistance/resistance.service';
import maskMinNumber from 'src/app/maskInput/maskMinNumber';
import maskToMaxLevelCharacter from 'src/app/maskInput/maskToMaxLevelCharacter';
import { IDamageCalculator } from 'src/interfaces/IDamageCalculator';

@Component({
  selector: 'app-damage-calculator',
  templateUrl: './damage-calculator.page.html',
  styleUrls: ['./damage-calculator.page.scss'],
})
export class DamageCalculatorPage implements OnInit {

  //mask input
  //https://maskito.dev/kit/number
  //https://ionicframework.com/docs/api/input#input-masking

  // https://honkai-star-rail.fandom.com/wiki/Damage

  maskNumberPercentage = maskNumberPercentage;
  maskMinNumber = maskMinNumber;
  maskToMaxLevelCharacter = maskToMaxLevelCharacter;
  vapo = maskitoTransform('0', this.maskNumberPercentage)

  description: string = '';
  //ainda precisa mostrar o dano causado na tela
  damageHistory: number[] = []

  skillMultiplier: string = maskitoTransform('0', this.maskNumberPercentage);
  scallingAtribute: string = maskitoTransform('0', this.maskMinNumber);

  causedCrit: boolean = false;
  critDamage: string = maskitoTransform('0', this.maskNumberPercentage);

  elementalDamage: string = maskitoTransform('0', this.maskNumberPercentage);
  damageBoost: string = maskitoTransform('0', this.maskNumberPercentage);
  allDamageBoost: number[] = [];//buff de ataque extra,pericia,atq basico

  enemyLevel: string = maskitoTransform('0', this.maskNumberPercentage);
  characterLevel: string = maskitoTransform('0', this.maskNumberPercentage);
  reductionDefense: string = maskitoTransform('0', this.maskNumberPercentage);
  reductionsEnemyDefense: number[] = [];
  ignoreDefense: string = maskitoTransform('0', this.maskNumberPercentage);
  ignoredEnemyDefenses: number[] = [];

  weakAgainstTheElement: boolean = false;
  characterResistancePenetration: string = maskitoTransform('0', this.maskNumberPercentage);
  decreaseResistanceEnemy: string = maskitoTransform('0', this.maskNumberPercentage);

  vulnerability: string = maskitoTransform('0', this.maskNumberPercentage);
  allTypesVulnerabilities: number[] = [];//inimigos sofrem mais dano(ex.:topaz pericia => o inimigo marcado sofre mais dano de ataques extras)

  weaknessBroken: boolean = false;

  constructor(
    private damageService: DamageService,
    private resistanceService: ResistanceService,
    public sharedService: SharedService
  ) {

  }

  junk() {
    console.log(+[...this.vapo].filter((x) => x !== '%').join(''));

  }

  ngOnInit(): void {

  }

  transformStringInNumber(str: string): number {
    return this.sharedService.transformStringInNumber(str);
  }

  clara() {
    // colocar variavel de vunerabilidade
    //16651 9517
    //15810
    this.description = "Clara Talento";

    this.skillMultiplier = '160%';
    this.scallingAtribute = '3252';

    this.causedCrit = true;
    this.critDamage = '147.8';

    this.elementalDamage = '63.2';
    this.damageBoost = '0';
    this.allDamageBoost = [24, 30];

    this.enemyLevel = '82';
    this.characterLevel = '80';
    this.reductionsEnemyDefense = [];
    this.ignoredEnemyDefenses = [];

    this.weakAgainstTheElement = false;
    this.characterResistancePenetration = '0';

    this.allTypesVulnerabilities = [];

    this.weaknessBroken = false;
  }

  // huohuo() {
  //   //1840
  //   //1840
  //   this.skillMultiplier = 45;
  //   this.scallingAtribute = 5883;

  //   this.causedCrit = false;
  //   this.critDamage = 0;

  //   this.elementalDamage = 0;
  //   this.damageBoost = 0;
  //   this.allDamageBoost = [];

  //   this.enemyLevel = 82;
  //   this.characterLevel = 80;
  //   this.reductionsEnemyDefense = [];
  //   this.ignoredEnemyDefenses = [];

  //   this.weakAgainstTheElement = true;
  //   this.characterResistancePenetration = 0;

  //   this.weaknessBroken = false;
  // }

  // topaz() {
  //   // colocar variavel de vunerabilidade
  //   //16651 9517
  //   //15810
  //   this.description = "Topaz Pericia";

  //   this.skillMultiplier = 150;
  //   this.scallingAtribute = 2863;

  //   this.causedCrit = true;
  //   this.critDamage = 167.9;

  //   this.elementalDamage = 61.2;
  //   this.damageBoost = 0;
  //   this.allDamageBoost = [65];

  //   this.enemyLevel = 82;
  //   this.characterLevel = 80;
  //   this.reductionsEnemyDefense = [];
  //   this.ignoredEnemyDefenses = [];

  //   this.weakAgainstTheElement = false;
  //   this.characterResistancePenetration = 0;

  //   this.allTypesVulnerabilities = [50];

  //   this.weaknessBroken = false;
  // }

  // seele() {
  //   //12330
  //   //12320
  //   this.skillMultiplier = 220;
  //   this.scallingAtribute = 3154;

  //   this.causedCrit = true;
  //   this.critDamage = 180.2;

  //   this.elementalDamage = 48.8;
  //   this.damageBoost = 0;
  //   this.allDamageBoost = [20];

  //   this.enemyLevel = 82;
  //   this.characterLevel = 80;
  //   this.reductionsEnemyDefense = [];
  //   this.ignoredEnemyDefenses = [10];
  //   this.decreaseResistanceEnemy = 0;

  //   this.weakAgainstTheElement = false;
  //   this.characterResistancePenetration = 0;

  //   this.weaknessBroken = false;
  // }

  clearInformations() {
    this.skillMultiplier = '0';
    this.scallingAtribute = '0';

    this.causedCrit = false;
    this.critDamage = '0';

    this.elementalDamage = '0';
    this.damageBoost = '0';
    this.allDamageBoost = [];

    this.enemyLevel = '0';
    this.characterLevel = '0';
    this.reductionsEnemyDefense = [];
    this.ignoredEnemyDefenses = [];

    this.weakAgainstTheElement = false;
    this.characterResistancePenetration = '0';
    this.decreaseResistanceEnemy = '0';

    this.weaknessBroken = false;
  }

  addBoostDamage() {
    this.allDamageBoost.push(this.transformStringInNumber(this.damageBoost));
  }
  addReductionDefenseEnemy() {
    this.reductionsEnemyDefense.push(this.transformStringInNumber(this.reductionDefense));
  }
  addIgnoreEnemyDefense() {
    this.ignoredEnemyDefenses.push(this.transformStringInNumber(this.ignoreDefense));
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
    console.log(this.elementalDamage);

    const calculateDamage: IDamageCalculator = {
      skillMultiplier: this.transformStringInNumber(this.skillMultiplier),
      scallingAtribute: this.transformStringInNumber(this.scallingAtribute),
      causedCrit: this.causedCrit,
      critDamage: this.transformStringInNumber(this.critDamage),
      elementalDamage: this.transformStringInNumber(this.elementalDamage),
      allDamageBoost: this.allDamageBoost,
      enemyLevel: this.transformStringInNumber(this.enemyLevel),
      characterLevel: this.transformStringInNumber(this.characterLevel),
      reductionsEnemyDefense: this.reductionsEnemyDefense,
      ignoredEnemyDefenses: this.ignoredEnemyDefenses,
      weakAgainstTheElement: this.weakAgainstTheElement,
      characterResistancePenetration: this.transformStringInNumber(this.characterResistancePenetration),
      decreaseResistanceEnemy: this.transformStringInNumber(this.decreaseResistanceEnemy),
      allTypesVulnerabilities: this.allTypesVulnerabilities,
      weaknessBroken: this.weaknessBroken
    }

    console.log(calculateDamage);


    const baseDamageAttacker = this.damageService.baseDamageAttacker(calculateDamage.skillMultiplier, 0, calculateDamage.scallingAtribute, 0);
    const critMultiplierAttacker = this.damageService.critMultiplierAttacker(calculateDamage.causedCrit, calculateDamage.critDamage);
    const damageBoostMultiplierAttacker = this.damageService.damageBoostMultiplierAttacker(calculateDamage.elementalDamage, calculateDamage.allDamageBoost, 0);
    const weakenMultiplierAttacker = 1; //não tenho certeza se tem algum mob que cause fraqueza(reduzir o dano), se houver o calculo é 1 - Weaken. ex.: 1 - 30%.
    const defenseMultiplierEnemy = this.resistanceService.defenseMultiplierEnemy(calculateDamage.enemyLevel, calculateDamage.characterLevel, calculateDamage.reductionsEnemyDefense, calculateDamage.ignoredEnemyDefenses);
    const resistanceMultiplierEnemy = this.resistanceService.resistanceMultiplierEnemy(calculateDamage.weakAgainstTheElement, calculateDamage.characterResistancePenetration, calculateDamage.decreaseResistanceEnemy);
    const vulnerabilityMultiplierEnemy = this.resistanceService.vulnerabilityMultiplierEnemy(0, calculateDamage.allTypesVulnerabilities, 0);
    const brokenMultiplier = this.resistanceService.brokenMultiplier(this.weaknessBroken);

    const finalDamage = +(baseDamageAttacker * critMultiplierAttacker * damageBoostMultiplierAttacker * weakenMultiplierAttacker * defenseMultiplierEnemy * resistanceMultiplierEnemy * vulnerabilityMultiplierEnemy * brokenMultiplier).toFixed();
    //possui uma pequena margem de erro 
    this.addDamageHistory(finalDamage)

  }
}
