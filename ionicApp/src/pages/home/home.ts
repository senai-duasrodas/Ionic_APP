import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoUsuarioPage } from '../novo-usuario/novo-usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  public logform() {
    this.login.logando(this.userName, this.password).subscribe(
      (data : any) => {
        console.log(data);
        this.navCtrl.setRoot(DashbordPage);
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