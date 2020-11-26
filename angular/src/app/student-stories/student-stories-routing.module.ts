import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentStoriesComponent } from './student-stories.component';

const routes: Routes = [{ path: '', component: StudentStoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentStoriesRoutingModule { }
