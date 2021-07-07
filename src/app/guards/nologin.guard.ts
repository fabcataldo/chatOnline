import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate{
  path: ActivatedRouteSnapshot[];  
  route: ActivatedRouteSnapshot;

  constructor(private AFout: AngularFireAuth, private router: Router){}

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
      
      return this.AFout.authState.pipe(map(auth=>{

        //SI NO ESTÁ LOGEADO, vamos a dejar que vaya al login
        if(isNullOrUndefined(auth)){
          return true;
        }

        //SI ESTA LOGEADO, QUE VAYA AL HOME, NOOOO AL LOGIN
        else{
          this.router.navigate(['/home']); 
          return false;
        }
      })) 
    }
}
