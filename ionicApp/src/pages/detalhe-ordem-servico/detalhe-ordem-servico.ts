import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaOrdemProvider } from '../../providers/consulta-ordem/consulta-ordem';
import { TipoStatusProvider } from '../../providers/tipo-status/tipo-status';
import { TipoPrioridadeProvider } from '../../providers/tipo-prioridade/tipo-prioridade';
import { VerificacaoPage } from '../verificacao/verificacao';
import { ApontamentoPage } from '../apontamento/apontamento';
import { SolicitaProdutoPage } from '../solicita-produto/solicita-produto';
import { OperacoesPage } from '../operacoes/operacoes';

/**
 * Generated class for the DetalheOrdemServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-ordem-servico',
  templateUrl: 'detalhe-ordem-servico.html',
})
export class DetalheOrdemServicoPage {

  public ordem = [];
  public statusOrdem = [];
  public prioridade = [];
  statusOrdemSelecionada : string;
  prioridadeSelecionada : string;
  private orderKey : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public consultaOrdemProvider: ConsultaOrdemProvider, public tipoStatusProvider: TipoStatusProvider, public tipoPrioridadeProvider: TipoPrioridadeProvider) {
    this.orderKey = this.navParams.data.id;
    this.tipoStatus();
    this.tipoPrioridade();
    this.consultaOrdem();

}
  public consultaOrdem() {
    this.consultaOrdemProvider.detalhamentoOrdem(this.orderKey).subscribe(
      (data : any) => {
        this.ordem=data;
        console.log("Tela de Detalhamentoooo123");
        console.log(this.ordem);
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public tipoStatus() {
    this.tipoStatusProvider.todosStatus().subscribe(
      (data : any) => {
        this.statusOrdem=data;
        console.log(this.statusOrdem)
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public tipoPrioridade() {
    this.tipoPrioridadeProvider.todasPrioridade().subscribe(
      (data : any) => {
        this.prioridade=data;
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public voltarDashboard(){
    this.navCtrl.pop();
  }
  public verificacao(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(VerificacaoPage,obj);
  }
  public solicitaPeca(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(SolicitaProdutoPage,obj);
  }
  public apontamento(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(ApontamentoPage,obj);
  }
  public operacoes(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(OperacoesPage,obj);
  }
}