import { Router } from '@angular/router';
import { JwtResponseI } from './../models/jwt-response';
import { Injectable } from '@angular/core';
import { UserI } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_API = 'http://localhost:3000';
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.URL_API}/api/login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            this.saveToken(res);
          }
        })
      );
  }

  logout():void{
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('EXPIRE_AT');
    localStorage.removeItem('USER');
    this.token = null;
    this.router.navigateByUrl('/login');
  }

  isAuthenticate():boolean{
    let expiresAt = localStorage.getItem("EXPIRE_AT");
    if(expiresAt === null){
      return false;
    }else{
      let logeado = Number(localStorage.getItem("EXPIRE_AT")) > new Date().getTime();
      if(!logeado) this.logout();
      return logeado;
    }
  }

  private saveToken(response:JwtResponseI):void{
    localStorage.setItem('TOKEN', response.token);
    localStorage.setItem('EXPIRE_AT', JSON.stringify(response.expires_at));
    localStorage.setItem('USER', JSON.stringify(response.user));
    this.token = response.token;
  }

  private getToken():string {
    if(!this.token){
      this.token = localStorage.getItem('TOKEN');
    }
    return this.token;
  }

}
