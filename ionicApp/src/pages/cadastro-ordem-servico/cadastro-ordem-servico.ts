import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ConsultarSetorProvider } from '../../providers/consultar-setor/consultar-setor';
import { CadastroOrdemProvider } from '../../providers/cadastro-ordem/cadastro-ordem';
import { Toast } from '../../providers/toast';

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
  public ordem = [];
  resumo : string;
  descricao : string;
  manutencao : string;
  inicioPlanejado : string;
  fimPlanejado : string;
  prioridade : string;
  statusChamado : string;
  requerParada : string;
  setorSelecionado : string;


  constructor(public navCtrl: NavController, public navParams: NavParams,private toast : Toast, public consultarSetorProvider: ConsultarSetorProvider, public cadastroOrdemProvider: CadastroOrdemProvider) {
    this.consultSetor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroOrdemServicoPage');
  }
  public consultSetor() {
    this.consultarSetorProvider.todosSetores().subscribe(
      (data2 : any) => {
        this.setor=data2;
        console.log(this.setor);
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public cadastroOrdemServico(){
    this.cadastroOrdemProvider.cadastroOrdem(this.resumo, this.descricao, this.manutencao, this.inicioPlanejado, this.fimPlanejado, this.prioridade, this.statusChamado, this.requerParada, this.setorSelecionado).subscribe(
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

}