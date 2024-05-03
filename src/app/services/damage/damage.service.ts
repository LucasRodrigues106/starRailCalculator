import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DamageService {

  constructor(
    private sharedService: SharedService
  ) { }

  baseDamageAttacker(skillMultiplier: number, extraMultiplier: number, scallingAtribute: number, extraDamage: number): number {
    return (skillMultiplier / 100 + extraMultiplier / 100) * scallingAtribute + extraDamage;
  }

  critMultiplierAttacker(causedCritical: boolean, critDamage: number): number {
    return causedCritical ? 1 + (critDamage / 100) : 1;
  }

  damageBoostMultiplierAttacker(elementalDamage: number, allDamageBoost: number[], dotBoost: number): number {
    const sumAllDamageBoost: number = this.sharedService.sumNumberInArray(allDamageBoost);
    return 1 + elementalDamage / 100 + sumAllDamageBoost / 100 + dotBoost / 100;
  }
}
