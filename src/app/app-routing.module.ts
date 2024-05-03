import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list-characters',
      },
      {
        path: 'damage-calculator',
        loadChildren: () => import('./pages/damage-calculator/damage-calculator.module').then(m => m.DamageCalculatorPageModule)
      },
      {
        path: 'break-damage-calculator',
        loadChildren: () => import('./pages/break-damage-calculator/break-damage-calculator.module').then(m => m.BreakDamageCalculatorPageModule)
      },
      {
        path: 'list-characters',
        loadChildren: () => import('./pages/list-characters/list-characters.module').then(m => m.ListCharactersPageModule),
      },
    ]
  },
  {
    path: 'character-damage-calculator',
    loadChildren: () => import('./pages/character-damage-calculator/character-damage-calculator.module').then( m => m.CharacterDamageCalculatorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
