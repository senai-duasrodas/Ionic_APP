import { HttpProvider } from './../http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsultarSetorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultarSetorProvider {

  url = "http://localhost:3000/ordemServico";

  constructor(public http: HttpProvider) {
    console.log('Hello ConsultarSetorProvider Provider');
  }
  public todosSetores(){
    this.http.url = this.url;
    return this.http.get();
  }

}
