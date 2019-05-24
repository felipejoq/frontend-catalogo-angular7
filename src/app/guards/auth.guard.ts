import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(public auth:AuthService, public router:Router){}

  canActivate() {

    if(this.auth.isAuthenticate()){
      // Está autenticado
      return true;
    }else{
      // No Está autenticado
      this.router.navigateByUrl('/login')
      return false;
    }

    
  }
}
