import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveRoutingModule } from './give-routing.module';
import { GiveComponent } from './give.component';


@NgModule({
  declarations: [GiveComponent],
  imports: [
    CommonModule,
    GiveRoutingModule
  ]
})
export class GiveModule { }
