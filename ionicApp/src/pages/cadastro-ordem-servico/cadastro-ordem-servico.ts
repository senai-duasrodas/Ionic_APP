import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ConsultarSetorProvider } from '../../providers/consultar-setor/consultar-setor';
import { CadastroOrdemProvider } from '../../providers/cadastro-ordem/cadastro-ordem';
import { Toast } from '../../providers/toast';
import { DashboardPage } from '../dashboard/dashboard';
import { TipoPrioridadeProvider } from '../../providers/tipo-prioridade/tipo-prioridade';
import { TipoStatusProvider } from '../../providers/tipo-status/tipo-status';
import { TipoManutencaoProvider } from '../../providers/tipo-manutencao/tipo-manutencao';

/**
 * Generated class for the CadastroOrdemServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-ordem-servico',
  templateUrl: 'cadastro-ordem-servico.html',
})
export class CadastroOrdemServicoPage {

  public setor = [];
  public manutencaoTodas = [];
  public statusOrdem = [];
  public prioridade = [];
  public ordem = [];
  resumo : string;
  descricao : string;
  manutencao : string;
  inicioPlanejado : string;
  fimPlanejado : string;
  requerParada : string;
  setorSelecionado : string;
  statusOrdemSelecionada : string;
  prioridadeSelecionada : string;


  constructor(public navCtrl: NavController, public navParams: NavParams,private toast : Toast, public tipoManutencaoProvider: TipoManutencaoProvider ,public consultarSetorProvider: ConsultarSetorProvider, public cadastroOrdemProvider: CadastroOrdemProvider, public tipoPrioridadeProvider: TipoPrioridadeProvider, public tipoStatusProvider: TipoStatusProvider) {
    this.consultSetor();
    this.tipoPrioridade();
    this.tipoStatus();
  }
  public consultSetor() {
    this.consultarSetorProvider.todosSetores().subscribe(
      (data : any) => {
        this.setor=data;
        console.log(this.setor);
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public tipoManutencao() {
    this.tipoManutencaoProvider.Manutencao().subscribe(
      (data : any) => {
        this.manutencaoTodas=data;
        console.log(this.setor);
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
        console.log(this.setor);
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
  public cadastroOrdemServico(){
    this.cadastroOrdemProvider.cadastroOrdem(this.resumo, this.descricao, this.manutencao, this.inicioPlanejado, this.fimPlanejado, this.prioridadeSelecionada, this.statusOrdemSelecionada, this.requerParada, this.setorSelecionado).subscribe(
      (data2 : any) => {
        this.ordem=data2;
        console.log(this.ordem);
        this.toast.presentToast("Cadastro realizado com sucesso!", 7000);
      },
      (error : any) =>{
        console.log("Deu errado");
        this.toast.presentToast("Ordem de serviço inválido!", 7000);
      }
    );
  }
  public voltarDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }

}