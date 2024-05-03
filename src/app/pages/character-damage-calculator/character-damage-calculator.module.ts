import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDamageCalculatorPageRoutingModule } from './character-damage-calculator-routing.module';

import { CharacterDamageCalculatorPage } from './character-damage-calculator.page';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDamageCalculatorPageRoutingModule
  ],
  declarations: [CharacterDamageCalculatorPage, PageNotFoundComponent]
})
export class CharacterDamageCalculatorPageModule { }
