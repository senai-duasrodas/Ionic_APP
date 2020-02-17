import { Injectable } from "@angular/core";
import { HttpProvider } from "../providers/http";

@Injectable()
export class MudaStatusProvider {

    constructor(private httpProvider: HttpProvider){

    }

    urlMuda = "http://localhost:3000/alterastatusos"

    public MudaStatus(fk_Status : number ,idUsuario : number ,idOrdemServico:number){
        this.httpProvider.url = this.urlMuda;
        let obj ={
            fk_Status:fk_Status,
            idUsuario:idUsuario,
            idOrdemServico:idOrdemServico
        }
        return this.httpProvider.patch(obj);
        
    }
    
}