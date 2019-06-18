import { HttpProvider } from './../http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AvaliarServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvaliarServicoProvider {
  url = "http://localhost:3000/avaliacao";

  constructor(public http: HttpProvider) {

  }
  public avaliar(textoAvaliar1 : string,textoAvaliar2 : string, valorAvaliado1 : number,valorAvaliado2 : number,usuarioVerifica1 : number, usuarioVerifica2 : number, numeroOrdem : number){
    //console.log(userName);
    //console.log(password);
    let obj = {
      textoAvaliar1 : textoAvaliar1,
      textoAvaliar2 : textoAvaliar2,
      valorAvaliado1 : valorAvaliado1,
      valorAvaliado2 : valorAvaliado2,
      usuarioVerifica1 : usuarioVerifica1,
      usuarioVerifica2 : usuarioVerifica2,
      numeroOrdem : numeroOrdem
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }

}
