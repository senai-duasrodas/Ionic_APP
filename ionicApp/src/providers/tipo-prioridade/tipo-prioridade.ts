import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the TipoPrioridadeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TipoPrioridadeProvider {

  url = "http://localhost:3000/prioridade";

  constructor(public http: HttpProvider) {
    console.log('Hello TipoPrioridadeProvider Provider');
  }
  public todasPrioridade(){
    this.http.url = this.url;
    return this.http.get();
  }

}
