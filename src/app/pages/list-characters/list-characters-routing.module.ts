import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCharactersPage } from './list-characters.page';

const routes: Routes = [
  {
    path: '',
    component: ListCharactersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCharactersPageRoutingModule {}
