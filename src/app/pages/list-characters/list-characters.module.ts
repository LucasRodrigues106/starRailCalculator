import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCharactersPageRoutingModule } from './list-characters-routing.module';

import { ListCharactersPage } from './list-characters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCharactersPageRoutingModule
  ],
  declarations: [ListCharactersPage]
})
export class ListCharactersPageModule {}
