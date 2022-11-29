import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpscPage } from './addpsc.page';

const routes: Routes = [
  {
    path: '',
    component: AddpscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpscPageRoutingModule {}
