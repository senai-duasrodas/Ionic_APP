import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the TipoManutencaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TipoManutencaoProvider {

  url = "http://localhost:3000/manutencao";

  constructor(public http: HttpProvider) {
    console.log('Hello TipoManutencaoProvider Provider');
  }
  public Manutencao(){
    this.http.url = this.url;
    return this.http.get();
  }

}
