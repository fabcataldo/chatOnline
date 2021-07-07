import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private AFout: AngularFireAuth, private router: Router){}

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
      
      //todo esto se ejecuta asincronamente
      //ejecuto el authState, y me va a devolver un objeto
      //auth en el que va a haber info sobre el usuario logeado
      return this.AFout.authState.pipe(map(auth=>{
        //si no hay nada en el objeto auth eso quiere deceir que el usuario no se logueó
        //devuelvo false y NO DEJO entrar al home
        if(isNullOrUndefined(auth)){
          this.router.navigate(['/login']);
          return false;
        }
        //si no, dejo entrar al home y devuelvo true
        else{
          //si devuelvo true, puedo entrar a la página que el guard está protegiendo
          //si no, no
          return true;
        }
      }))
    }
}
