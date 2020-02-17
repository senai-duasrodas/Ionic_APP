
import { Injectable } from '@angular/core';
import { HttpProvider } from '../../http';

/*
  Generated class for the BuscaEpiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BuscaEpiProvider {

  constructor(public httpProvider: HttpProvider) {
    console.log('Hello BuscaEpiProvider Provider');
  }
  urlpegaEPI ="http://localhost:3000/epi";

  public pegaEPI(idOrdemServico:Number){

    let obj = {
      idOrdemServico:idOrdemServico
    }
    this.httpProvider.url = this.urlpegaEPI;

    return this.httpProvider.post(obj);
  }

}
