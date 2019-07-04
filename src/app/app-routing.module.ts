//ARCHIVO DE RUTASSSSSSSSSSSSSS

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'
import { NologinGuard} from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //para home, lo protejo con el guard AuthGuard
  //en el arreglo de ahí, puedo agregar varios guards
  //mientras los guards devuelvan true, uno puede entrar a home, si no, no
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate:[AuthGuard] },
  
  //PONIENDO EL GUARD DE NOLOGIN QUE HICE, evito que yo LOGEADO, vaya al /login
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate:[NologinGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
