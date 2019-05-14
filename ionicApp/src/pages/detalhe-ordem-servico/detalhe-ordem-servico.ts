import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaOrdemProvider } from '../../providers/consulta-ordem/consulta-ordem';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public consultaOrdemProvider: ConsultaOrdemProvider) {
  }
  public consultaOrdem() {
    this.consultaOrdemProvider.detalhamentoOrdem().subscribe(
      (data : any) => {
        this.ordem=data;
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

}
