import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../servicios/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;
  constructor(private authService: AuthService, public router:Router,
    private toastSrv:ToastService) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(res=>{
      this.router.navigate(['/home']);  
    }).catch(err => 
      this.toastSrv.mostrarToast('Los datos son INCORRECTOS, o no existe el usuario')
    );
   }
}
