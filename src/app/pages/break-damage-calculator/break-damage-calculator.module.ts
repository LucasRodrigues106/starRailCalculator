import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakDamageCalculatorPageRoutingModule } from './break-damage-calculator-routing.module';

import { BreakDamageCalculatorPage } from './break-damage-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakDamageCalculatorPageRoutingModule
  ],
  declarations: [BreakDamageCalculatorPage]
})
export class BreakDamageCalculatorPageModule {}
