import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakDamageCalculatorPage } from './break-damage-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: BreakDamageCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakDamageCalculatorPageRoutingModule {}
