import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComittedToDataRoutingModule } from './comitted-to-data-routing.module';
import { ComittedToDataComponent } from './comitted-to-data.component';


@NgModule({
  declarations: [ComittedToDataComponent],
  imports: [
    CommonModule,
    ComittedToDataRoutingModule
  ]
})
export class ComittedToDataModule { }
