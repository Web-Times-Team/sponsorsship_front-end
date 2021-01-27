import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhereWeWorkRoutingModule } from './where-we-work-routing.module';
import { WhereWeWorkComponent } from './where-we-work.component';


@NgModule({
  declarations: [WhereWeWorkComponent],
  imports: [
    CommonModule,
    WhereWeWorkRoutingModule
  ]
})
export class WhereWeWorkModule { }
