import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalLearningRoutingModule } from './digital-learning-routing.module';
import { DigitalLearningComponent } from './digital-learning.component';


@NgModule({
  declarations: [DigitalLearningComponent],
  imports: [
    CommonModule,
    DigitalLearningRoutingModule
  ]
})
export class DigitalLearningModule { }
