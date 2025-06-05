import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CattuongPageRoutingModule } from './cattuong-routing.module';

import { CattuongPage } from './cattuong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CattuongPageRoutingModule
  ],
  declarations: [CattuongPage]
})
export class CattuongPageModule {}
