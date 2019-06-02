import {  Injectable  } from '@angular/core';
import { HttpProvider } from './http';  
@Injectable ()
export class SolicitarPecas {
    constructor(private httpProvider: HttpProvider){

    }
    urlPeca="http://localhost:3000/solicitapecas"
    public pecas(numeroPecas:number,
        setor:number,
        maquinaDestinada:string,
        NomePeca:string,
        prioridade:number,
        hora:string,
        Data:string,
        precoPeca:string,
        orderKey: string,
        usuario:string){
            let obj ={
                numeroPecas:numeroPecas,
                setor:setor,
                maquinaDestinada:maquinaDestinada,
                NomePeca:NomePeca,
                prioridade:prioridade,
                hora:hora,
                Data:Data,
                usuario:usuario,
                precoPeca:precoPeca,
                orderKey:orderKey
            }
            console.log("aki esta");
            this.httpProvider.url= this.urlPeca;
            return this.httpProvider.post(obj);

        }
}