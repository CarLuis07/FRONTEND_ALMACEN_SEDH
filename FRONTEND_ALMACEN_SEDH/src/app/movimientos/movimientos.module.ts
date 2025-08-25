import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosRoutingModule } from './movimientos-routing.module';
import { MovimientosComponent } from './components/movimientos.component';

@NgModule({
  declarations: [MovimientosComponent],
  imports: [
    CommonModule,
    MovimientosRoutingModule
  ]
})
export class MovimientosModule { }