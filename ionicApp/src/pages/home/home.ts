import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { NovoUsuarioPage } from '../novo-usuario/novo-usuario';
import { DashboardPage } from '../dashboard/dashboard';
import { GerarTokenProvider } from '../../providers/gerar-token/gerar-token';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName : string;
  password : string;
  dadosLogin2 : number;
  public dadosLogin = []; 

  constructor(public navCtrl: NavController, public login: LoginProvider, private evt : Events, private gerarTokenProvider: GerarTokenProvider) {

  }
   public logform() {
    this.login.logando(this.userName, this.password).subscribe(
      (data : any) => {
        this.dadosLogin = data;
        console.log("Este é o dados Login1: ");
        console.log(this.dadosLogin)
        this.inserirToken();
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }
  public inserirToken(){
    console.log("Este é o dados Login0: ");
    console.log(this.dadosLogin)
    this.gerarTokenProvider.gerarToken(this.dadosLogin).subscribe(
      (data2 : any) => {
        this.dadosLogin2 = data2;
        console.log("Este é o dados Login2: ");
        console.log(this.dadosLogin2)
        this.evt.publish("swipeEnabled");
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