import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDamageCalculatorPage } from './character-damage-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterDamageCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDamageCalculatorPageRoutingModule {}
