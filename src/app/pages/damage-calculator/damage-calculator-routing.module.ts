import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DamageCalculatorPage } from './damage-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: DamageCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DamageCalculatorPageRoutingModule {}
