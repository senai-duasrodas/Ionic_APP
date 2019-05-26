import { HttpProvider } from './../http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GerarTokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GerarTokenProvider {
  public dadosToken = []; 
  url = "http://localhost:3000/token";
  constructor(public http: HttpProvider) {
  }
  public gerarToken(dadosLogin2: any){
    //console.log(userName);
    console.log("------------");
    console.log(dadosLogin2);
    console.log("------------");
    this.http.url = this.url;
    return this.http.post(dadosLogin2);
  }
}
