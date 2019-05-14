import { HttpProvider } from './../../../../../Versão antiga salva/Ionic_APP/ionicApp/src/providers/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsultaOrdemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultaOrdemProvider {

  url = "http://localhost:3000/detalhamentoOrdem";

  constructor(public http: HttpProvider) {
    console.log('Hello ConsultaOrdemProvider Provider');
  }
  public detalhamentoOrdem(){
    this.http.url = this.url;
    return this.http.get();
  }

}
