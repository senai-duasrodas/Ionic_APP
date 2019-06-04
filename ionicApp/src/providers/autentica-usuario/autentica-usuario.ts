import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the AutenticaUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticaUsuarioProvider {

  url = "http://localhost:3000/autenticacao";

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
