import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CattuongPage } from './cattuong.page';

const routes: Routes = [
  {
    path: '',
    component: CattuongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CattuongPageRoutingModule {}
