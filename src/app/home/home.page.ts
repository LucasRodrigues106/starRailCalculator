import { ResistanceService } from './../services/resistance/resistance.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // https://honkai-star-rail.fandom.com/wiki/Damage

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

  constructor(private resistanceService: ResistanceService) {

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

  sumNumberArray(numberArray: number[]): number {
    if (numberArray.length === 0) return 0;
    return numberArray.reduce((accumulator, current) => accumulator + current);
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
    const baseDamageAttacker = this.baseDamageAttacker(this.skillMultiplier, 0, this.scallingAtribute, 0);
    const critMultiplierAttacker = this.critMultiplierAttacker(this.causedCrit, this.critDamage);
    const damageBoostMultiplierAttacker = this.damageBoostMultiplierAttacker(this.elementalDamage, this.allDamageBoost, 0);
    const weakenMultiplierAttacker = 1; //não tenho certeza se tem algum mob que cause fraqueza(reduzir o dano), se houver o calculo é 1 - Weaken. ex.: 1 - 30%.
    const defenseMultiplierEnemy = this.defenseMultiplierEnemy(this.enemyLevel, this.characterLevel, this.reductionsEnemyDefense, this.ignoredEnemyDefenses);
    const resistanceMultiplierEnemy = this.resistanceMultiplierEnemy(this.weakAgainstTheElement, this.characterResistancePenetration, this.decreaseResistanceEnemy);
    const vulnerabilityMultiplierEnemy = this.vulnerabilityMultiplierEnemy(0, this.allTypesVulnerabilities, 0);
    const brokenMultiplier = this.brokenMultiplier(this.weaknessBroken);

    const finalDamage = +(baseDamageAttacker * critMultiplierAttacker * damageBoostMultiplierAttacker * weakenMultiplierAttacker * defenseMultiplierEnemy * resistanceMultiplierEnemy * vulnerabilityMultiplierEnemy * brokenMultiplier).toFixed();
    //possui uma pequena margem de erro 
    this.addDamageHistory(finalDamage)

  }

  baseDamageAttacker(skillMultiplier: number, extraMultiplier: number, scallingAtribute: number, extraDamage: number): number {
    return (skillMultiplier / 100 + extraMultiplier / 100) * scallingAtribute + extraDamage;
  }

  critMultiplierAttacker(causedCritical: boolean, critDamage: number): number {
    return causedCritical ? 1 + (critDamage / 100) : 1;
  }

  damageBoostMultiplierAttacker(elementalDamage: number, allDamageBoost: number[], dotBoost: number): number {
    const sumAllDamageBoost: number = this.sumNumberArray(allDamageBoost);
    return 1 + elementalDamage / 100 + sumAllDamageBoost / 100 + dotBoost / 100;
  }

  defenseMultiplierEnemy(levelEnemy: number, levelAttacker: number, reductionsDefense: number[], ignoredDefenses: number[]) {
    // const baseDefenseEnemy = 200 + 10 * levelEnemy; //apenas para inimigos
    // const enemyDefense = 1 - (baseDefenseEnemy / (baseDefenseEnemy + 200 + 10 * levelAttacker));
    // return enemyDefense;
    const reductionDef = this.sumNumberArray(reductionsDefense);
    const igonoreDefense = this.sumNumberArray(ignoredDefenses);

    const levelAttackerPlusTwenty = levelAttacker + 20;
    const defMultiplier = (levelAttackerPlusTwenty) / ((levelEnemy + 20) * (1 - reductionDef / 100 - igonoreDefense / 100) + levelAttackerPlusTwenty);
    return defMultiplier;
  }

  resistanceMultiplierEnemy(weakAgainstTheElement: boolean, resistancePenetrationAttacker: number, decreaseResistanceEnemy: number): number {
    let resistanceEnemy = 20;
    if (weakAgainstTheElement) {
      resistanceEnemy = 0;
    }
    return 1 - ((resistanceEnemy - decreaseResistanceEnemy) / 100 - resistancePenetrationAttacker / 100);
  }

  vulnerabilityMultiplierEnemy(elementalVulnerability: number, allTypeVunerability: number[], dotVulnerability: number): number {
    //vulnerabilidade são habilidades que fazem o inimigo tomar mais dano. ex.: talento da guinaifen, sampo ult(aumenta so o dano de dot),topaz pericia(faz tomar 50% a mais de dano de ataque extra)
    const sumAllTypeVunerability: number = this.sumNumberArray(allTypeVunerability);
    return 1 + elementalVulnerability / 100 + sumAllTypeVunerability / 100 + dotVulnerability / 100;
  }

  brokenMultiplier(weaknessBroken: boolean): number {
    return weaknessBroken ? 1 : 0.9;
  }

}
