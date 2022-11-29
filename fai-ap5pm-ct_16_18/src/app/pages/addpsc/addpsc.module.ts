import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpscPageRoutingModule } from './addpsc-routing.module';

import { AddpscPage } from './addpsc.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpscPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddpscPage]
})
export class AddpscPageModule {}
