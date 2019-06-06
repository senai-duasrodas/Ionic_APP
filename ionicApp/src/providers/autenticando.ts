import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from './http';
import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

/*
  Generated class for the VerificacaoManutencaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticandoProvider {
    
    url = "http://localhost:3000/autenticacao";
    usuario : string;
    token : string;

  constructor(public http: HttpProvider) {
  }
  public verificaUsuario(id:number, token: string){
    this.http.url = this.url;
    let obj = {
      id : id,
      token : token
    }
    return this.http.post(obj);
  }

}
