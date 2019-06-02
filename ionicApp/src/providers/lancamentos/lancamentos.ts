import { HttpProvider } from './../http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LancamentosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LancamentosProvider {

  url = "http://localhost:3000/lancamentos";

  constructor(public http: HttpProvider) {
  }
  public lancamento(orderKey : number,dataApontamento : string, tempoDedicado : string, usuario: string){
    //console.log(userName);
    //console.log(password);
    let obj = {
      dataApontamento : dataApontamento,
      tempoDedicado : tempoDedicado,
      usuario: usuario,
      orderKey: orderKey
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }

}
