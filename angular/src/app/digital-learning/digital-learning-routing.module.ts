import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalLearningComponent } from './digital-learning.component';

const routes: Routes = [{ path: '', component: DigitalLearningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalLearningRoutingModule { }
