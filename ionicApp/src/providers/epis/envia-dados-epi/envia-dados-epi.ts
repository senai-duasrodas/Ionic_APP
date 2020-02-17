
import { Injectable } from '@angular/core';
import { HttpProvider } from '../../http';

/*
  Generated class for the EnviaDadosEpiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnviaDadosEpiProvider {
  constructor(public httpProvider: HttpProvider) {
    console.log('Hello JustificaEpiProvider Provider');
  }
  
  // this.ListaEPI.id,this.ListaEPI.idOrdemServico,this.ListaEPI.fk_Status,this.ListaEPI.epis,this.justificativa
  public enviarDadosServer(idUsuario: number, idOrdemServico: number, fk_Status: number, listaepi: any, justificativa: any) {
    console.log('entrou 🎉');
    let urlDados ="http://localhost:3000/epicompleto";
    this.httpProvider.url = urlDados;
    let obj = {
      idUsuario: idUsuario,
      idOrdemServico: idOrdemServico,
      fk_Status: fk_Status,
      listaepi: listaepi,
      justificativa: justificativa
    }
    console.log('porada 🎉');
    return this.httpProvider.post(obj);

  }


}
