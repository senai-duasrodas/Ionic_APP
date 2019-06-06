import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AutenticacaouserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacaouserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AutenticacaouserProvider Provider');
  }
  public autenticaUsuario(){

    
  }
}
