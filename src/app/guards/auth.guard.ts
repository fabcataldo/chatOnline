import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private AFout: AngularFireAuth){}

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
      
      //todo esto se ejecuta asincronamente
      return this.AFout.authState.pipe(map(auth=>{

        if(isNullOrUndefined(auth)){
          return false;
        }
        else{
          console.log(auth)
          //si devuelvo true, puedo entrar a la página que el guard está protegiendo
          //si no, no
          return true;
        }
      }))
      
      
    }
}
