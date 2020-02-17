import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../../http';

/*
  Generated class for the JustificaEpiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JustificaEpiProvider {

  constructor(public httpProvider: HttpProvider) {
    console.log('Hello JustificaEpiProvider Provider');
  }
  urlDados="http://localhost:3000/epicomjustificativa";
  public enviarDadosServerJustificada(idUsuario:number,idOrdemServico:number,fk_Status:number,listaepi:any,justificativa:any){
   
 
    this.httpProvider.url = this.urlDados;
    let obj ={
      idUsuario:idUsuario,
      idOrdemServico:idOrdemServico,
      fk_Status:fk_Status,
      listaepi:listaepi,
      justificativa:justificativa
    }
    return this.httpProvider.post(obj);

  }

}
