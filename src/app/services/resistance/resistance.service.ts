import { SharedService } from './../shared/shared.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistanceService {

  constructor(
    private sharedService: SharedService
  ) { }

  defenseMultiplierEnemy(levelEnemy: number, levelAttacker: number, reductionsDefense: number[], ignoredDefenses: number[]) {
    // const baseDefenseEnemy = 200 + 10 * levelEnemy; //apenas para inimigos
    // const enemyDefense = 1 - (baseDefenseEnemy / (baseDefenseEnemy + 200 + 10 * levelAttacker));
    // return enemyDefense;
    const reductionDef = this.sharedService.sumNumberInArray(reductionsDefense);
    const igonoreDefense = this.sharedService.sumNumberInArray(ignoredDefenses);

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
    const sumAllTypeVunerability: number = this.sharedService.sumNumberInArray(allTypeVunerability);
    return 1 + elementalVulnerability / 100 + sumAllTypeVunerability / 100 + dotVulnerability / 100;
  }

  brokenMultiplier(weaknessBroken: boolean): number {
    return weaknessBroken ? 1 : 0.9;
  }
}
