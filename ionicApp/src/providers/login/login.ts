import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  url = "http://localhost:3000/logando";
  
  constructor(public http: HttpProvider) {
    console.log('Hello LoginProvider Provider');
  }

  public logando(userName : string, password : string){
    //console.log("Passei Aqui mesmo daora");
    let obj = {
      userName : userName,
      password : password
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }

}
