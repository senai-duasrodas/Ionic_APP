import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the VerificacaoManutencaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VerificacaoManutencaoProvider {

  url = "http://localhost:3000/verificamanutencao";

  constructor(public http: HttpProvider) {
  }
  public verificacao(numeroOrdem : number, solucaoRealizada : string, problemaResolvido: string, responsavel1: string, responsavel2: string,usuario : number){
    console.log("Passei Aqui mesmo");
    //console.log(userName);
    //console.log(password);
    let obj = {
      numeroOrdem : numeroOrdem,
      solucaoRealizada : solucaoRealizada,
      problemaResolvido: problemaResolvido,
      responsavel1: responsavel1,
      responsavel2: responsavel2,
      usuario: usuario
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }

}
