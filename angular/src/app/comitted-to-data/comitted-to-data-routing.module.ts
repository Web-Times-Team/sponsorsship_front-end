import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComittedToDataComponent } from './comitted-to-data.component';

const routes: Routes = [{ path: '', component: ComittedToDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComittedToDataRoutingModule { }
