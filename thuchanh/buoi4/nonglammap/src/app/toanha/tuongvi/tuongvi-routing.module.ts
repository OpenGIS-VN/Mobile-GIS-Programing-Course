import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuongviPage } from './tuongvi.page';

const routes: Routes = [
  {
    path: '',
    component: TuongviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuongviPageRoutingModule {}
