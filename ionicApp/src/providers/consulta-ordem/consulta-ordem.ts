import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the ConsultaOrdemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultaOrdemProvider {

  url = "http://localhost:3000/detalhamentoordem";

  constructor(public http: HttpProvider) {
    console.log('Hello ConsultaOrdemProvider Provider');
  }
  public detalhamentoOrdem(id:number){
    this.http.url = this.url;
    let obj = {
      id : id,
    }
    return this.http.post(obj);
  }

}
