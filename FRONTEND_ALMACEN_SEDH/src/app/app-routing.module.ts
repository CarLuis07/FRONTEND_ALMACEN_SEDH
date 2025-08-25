Aquí tienes el contenido del archivo `src/app/app-routing.module.ts` para tu proyecto Angular 19:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'acceso', loadChildren: () => import('./acceso/acceso.module').then(m => m.AccesoModule) },
  { path: 'movimientos', loadChildren: () => import('./movimientos/movimientos.module').then(m => m.MovimientosModule) },
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  { path: 'requisiciones', loadChildren: () => import('./requisiciones/requisiciones.module').then(m => m.RequisicionesModule) },
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: '', redirectTo: '/acceso', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }