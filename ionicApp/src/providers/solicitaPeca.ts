import {  Injectable  } from '@angular/core';
import { HttpProvider } from '../providers/http';  
@Injectable ()
export class SolicitarPecas {
    constructor(private httpProvider: HttpProvider){

    }
    urlPeca="http://localhost:3000/SolicitaPecas"

    public pecas(  Nome:string,
        numeroPecas:number,
        setor:number,
        maquinaDestinada:string,
        NomePeca:string,
        prioridade:number,
        hora:string,
        Data:string,
        precoPeca:string) {
            let obj ={
                Nome:Nome,
                numeroPecas:numeroPecas,
                setor:setor,
                maquinaDestinada:maquinaDestinada,
                NomePeca:NomePeca,
                prioridade:prioridade,
                hora:hora,
                Data:Data,
                precoPeca:precoPeca
            }
            console.log("aki esta");
            this.httpProvider.url= this.urlPeca;
            return this.httpProvider.post(obj);

    }
}

