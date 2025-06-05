import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tuongvi',
    loadChildren: () => import('./toanha/tuongvi/tuongvi.module').then( m => m.TuongviPageModule)
  },
  {
    path: 'cattuong',
    loadChildren: () => import('./toanha/cattuong/cattuong.module').then( m => m.CattuongPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
