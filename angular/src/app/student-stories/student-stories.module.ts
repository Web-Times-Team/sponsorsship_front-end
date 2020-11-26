import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentStoriesRoutingModule } from './student-stories-routing.module';
import { StudentStoriesComponent } from './student-stories.component';


@NgModule({
  declarations: [StudentStoriesComponent],
  imports: [
    CommonModule,
    StudentStoriesRoutingModule
  ]
})
export class StudentStoriesModule { }
