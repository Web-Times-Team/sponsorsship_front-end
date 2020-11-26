import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkWithFactsComponent } from './work-with-facts.component';

const routes: Routes = [{ path: '', component: WorkWithFactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkWithFactsRoutingModule { }
