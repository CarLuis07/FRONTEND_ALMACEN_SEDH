import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisicionesComponent } from './components/requisiciones.component';

const routes: Routes = [
  { path: '', component: RequisicionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisicionesRoutingModule { }