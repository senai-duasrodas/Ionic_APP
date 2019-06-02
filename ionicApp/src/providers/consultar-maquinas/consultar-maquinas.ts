import { HttpProvider } from './../http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsultarMaquinasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultarMaquinasProvider {

  url = "http://localhost:3000/maquina";

  constructor(public http: HttpProvider) {
  }
  public todasMaquinas(){
    this.http.url = this.url;
    return this.http.get();
  }
}
