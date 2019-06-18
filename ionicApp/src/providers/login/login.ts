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
  }
  public logando(cracha : string, password : string){
    //console.log("Passei Aqui mesmo daora");
    let obj = {
      cracha : cracha,
      password : password
    }
    this.http.url = this.url;
    return this.http.post(obj);
  }

}
