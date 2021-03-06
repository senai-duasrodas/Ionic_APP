import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { AutenticacaouserProvider } from '../autenticacaouser/autenticacaouser';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the AutenticaUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticaUsuarioProvider {

  url = "http://localhost:3000/autenticacao";
  usuario : string;
  token : string;

  constructor(public http: HttpProvider,public navCtrl: NavController) {
  }
  public verificaUsuario(id:number, token: string){
    this.http.url = this.url;
    let obj = {
      id : id,
      token : token
    }
    return this.http.post(obj);
  }
  public autenticaUsuario(){
    this.usuario = window.localStorage.getItem("idUsuario")
    let id = Number(this.usuario)
    this.token = window.localStorage.getItem("token")
    this.verificaUsuario(id, this.token).subscribe(
      (data : any) => {
        console.log("Autenticação Realizada com Sucesso!!!!!")
      },
      (error : any) =>{
        this.navCtrl.setRoot(HomePage);
      }
    );

  }
}
