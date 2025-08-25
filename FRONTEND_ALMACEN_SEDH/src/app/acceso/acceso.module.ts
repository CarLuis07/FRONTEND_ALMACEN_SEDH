import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoRoutingModule } from './acceso-routing.module';
import { AccesoComponent } from './components/acceso.component';

@NgModule({
  declarations: [AccesoComponent],
  imports: [
    CommonModule,
    AccesoRoutingModule
  ]
})
export class AccesoModule { }