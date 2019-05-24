import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.isLogged();
  }

  onLogin(form){
    this.auth.login(form.value).subscribe(
      data => {
        if(data.ok){
          this.router.navigateByUrl('/catalogo');
        }
      },
      error => {
        this.error = error.error.error.message;
      }
    );
  }

  isLogged():void{
    if(localStorage.getItem('EXPIRE_AT') === null){
      return;
    }else{
      this.router.navigateByUrl('/catalogo');
    }
  }

}
