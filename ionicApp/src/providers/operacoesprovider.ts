import {Injectable} from '@angular/core';
import {HttpProvider} from '../providers/http';

@Injectable()
export class OperacoesProvider{

    urlOperacoes ="http://localhost:3000/registrooperacoes"
    constructor(private httpProvider : HttpProvider){

    }

    public RegistraOperacoes(operacao:string,
        descricao:string,
        statusOrdemSelecionada:string,
        tempoplanejado:string,
        execucao:string,
        idOrdemcadastrada:number){
            let obj ={
                operacao:operacao,
                descricao:descricao,
                statusOrdemSelecionada:statusOrdemSelecionada,
                tempoplanejado:tempoplanejado,
                execucao:execucao,
                idOrdemcadastrada:idOrdemcadastrada
                
            }
            this.httpProvider.url = this.urlOperacoes;
            return this.httpProvider.post(obj);
        
    }

}