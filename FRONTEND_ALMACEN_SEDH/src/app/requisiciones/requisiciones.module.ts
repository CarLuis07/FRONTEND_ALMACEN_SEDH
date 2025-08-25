import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisicionesRoutingModule } from './requisiciones-routing.module';
import { RequisicionesComponent } from './components/requisiciones.component';

@NgModule({
  declarations: [RequisicionesComponent],
  imports: [
    CommonModule,
    RequisicionesRoutingModule
  ]
})
export class RequisicionesModule { }