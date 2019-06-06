import { HttpProvider } from './../http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticaUsuarioProvider } from '../autentica-usuario/autentica-usuario';
import { NavController } from 'ionic-angular/umd';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the AutenticacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacaoProvider {

  usuario : string;
  token : string;

  constructor(public http: HttpProvider,public navCtrl: NavController,public autenticaUsuarioProvider : AutenticaUsuarioProvider) {
  }

  public autenticaUsuario(){
    this.usuario = window.localStorage.getItem("idUsuario")
    let id = Number(this.usuario)
    this.token = window.localStorage.getItem("token")
    this.autenticaUsuarioProvider.verificaUsuario(id, this.token).subscribe(
      (data : any) => {
        console.log("Autenticação Realizada com Sucesso!!!!!")
      },
      (error : any) =>{
        this.navCtrl.setRoot(HomePage);
      }
    );
  }

}
