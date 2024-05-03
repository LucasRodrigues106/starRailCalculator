import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DamageCalculatorPageRoutingModule } from './damage-calculator-routing.module';

import { DamageCalculatorPage } from './damage-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DamageCalculatorPageRoutingModule
  ],
  declarations: [DamageCalculatorPage]
})
export class DamageCalculatorPageModule {}
