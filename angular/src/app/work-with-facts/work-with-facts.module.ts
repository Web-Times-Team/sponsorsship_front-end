import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkWithFactsRoutingModule } from './work-with-facts-routing.module';
import { WorkWithFactsComponent } from './work-with-facts.component';


@NgModule({
  declarations: [WorkWithFactsComponent],
  imports: [
    CommonModule,
    WorkWithFactsRoutingModule
  ]
})
export class WorkWithFactsModule { }
