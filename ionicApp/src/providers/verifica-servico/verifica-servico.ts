import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the VerificaServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VerificaServicoProvider {

  url = "http://localhost:3000/verificaservico";
  

  constructor(public http: HttpProvider) {
    console.log('Hello VerificaServicoProvider Provider');
  }

  public verificarServico(cracha : string, password : string){
    //console.log("Passei Aqui mesmo daora");
    let obj = {
      cracha : cracha,
      password : password
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }

}
