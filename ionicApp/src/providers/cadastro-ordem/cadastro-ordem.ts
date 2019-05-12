import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  Generated class for the CadastroOrdemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroOrdemProvider {

  url = "http://localhost:3000/novaordem";

  constructor(public http: HttpProvider) {
    console.log('Hello CadastroOrdemProvider Provider');
  }
  public cadastroOrdem(resumo : string, descricao : string, tipoManutencao : string, inicioPlanejado: string, fimPlanejado: string, prioridade: string,statusChamado: string,requerParada: string,Setor_idSetor: string){
    let obj = {
      resumo : resumo,
      descricao : descricao,
      tipoManutencao : tipoManutencao,
      inicioPlanejado: inicioPlanejado,
      fimPlanejado: fimPlanejado,
      prioridade: prioridade,
      statusChamado: statusChamado,
      requerParada: requerParada,
      Setor_idSetor: Setor_idSetor,
      Usuario_idUsuario : 1
    }
    console.log(obj);
    this.http.url = this.url;
    return this.http.post(obj);
  }

}
