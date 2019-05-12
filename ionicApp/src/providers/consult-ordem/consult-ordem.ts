import { HttpProvider } from './../http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsultOrdemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultOrdemProvider {

  url = "http://localhost:3000/setor";

  constructor(public http: HttpProvider) {
    console.log('Hello ConsultOrdemProvider Provider');
  }
  public consultarOrdem(){
    this.http.url = this.url;
    return this.http.get();
  }

}
