import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultOrdemProvider } from '../../providers/consult-ordem/consult-ordem';
import { DashboardPage } from '../dashboard/dashboard';
import { TipoStatusProvider } from '../../providers/tipo-status/tipo-status';
import { TipoPrioridadeProvider } from '../../providers/tipo-prioridade/tipo-prioridade';
import { DetalheOrdemServicoPage } from '../detalhe-ordem-servico/detalhe-ordem-servico';

/**
 * Generated class for the ConsultaOrdensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-ordens',
  templateUrl: 'consulta-ordens.html',
})
export class ConsultaOrdensPage {

  public ordem = [];
  item = [];
  public statusOrdem = [];
  public prioridade = [];
  statusOrdemSelecionada : string;
  prioridadeSelecionada : string;

  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public consultOrdemProvider: ConsultOrdemProvider,
      public tipoStatusProvider: TipoStatusProvider,
      public tipoPrioridadeProvider: TipoPrioridadeProvider
  )
  {
    this.tipoStatus();
    this.tipoPrioridade();
  }
  public consultOrdem() {
    this.consultOrdemProvider.consultarOrdem(this.statusOrdemSelecionada,this.prioridadeSelecionada).subscribe(
      (data : any) => {
        this.ordem=data;
        console.log("Tela consulta ordens")
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
    this.navCtrl.setRoot(DashboardPage);
  }
  public telaDetalhamento(id: number){
    let obj = {
      id : id
    }
    this.navCtrl.push(DetalheOrdemServicoPage,obj);
  }
}
