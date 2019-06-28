import { Injectable } from "@angular/core";
import { HttpProvider } from "../providers/http";

@Injectable()
export class MinhasOSProvider {
    
    constructor(private httpProvider : HttpProvider){

    }
    urlPegaOS = "http://localhost:3000/pegaminhasos"
    

    public PegaOS(id:number){
        let obj={
            idUsuario:id
        }
        this.httpProvider.url = this.urlPegaOS;
        return this.httpProvider.post(obj);
    }
}