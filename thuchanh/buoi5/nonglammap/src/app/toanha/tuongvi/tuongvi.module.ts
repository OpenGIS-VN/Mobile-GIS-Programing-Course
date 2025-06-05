import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuongviPageRoutingModule } from './tuongvi-routing.module';

import { TuongviPage } from './tuongvi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuongviPageRoutingModule
  ],
  declarations: [TuongviPage]
})
export class TuongviPageModule {}
