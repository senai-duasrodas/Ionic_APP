import { HttpProvider } from './../http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TipoStatusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TipoStatusProvider {
  
  url = "http://localhost:3000/status";

  constructor(public http: HttpProvider) {
    console.log('Hello TipoStatusProvider Provider');
  }
  public todosStatus(){
    this.http.url = this.url;
    return this.http.get();
  }

}
