import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoUsuarioPage } from '../novo-usuario/novo-usuario';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName : string;
  password : string;

  constructor(public navCtrl: NavController, public login: LoginProvider) {

  }
  public logform() {
    this.login.logando(this.userName, this.password).subscribe(
      (data : any) => {
        console.log(data);
        this.navCtrl.setRoot(DashboardPage);
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }
  public novoUsuario(){
    this.navCtrl.setRoot(NovoUsuarioPage);
  }
}