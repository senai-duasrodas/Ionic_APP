import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from  '../dashboard/dashboard';
import { SolicitarPecas } from '../../providers/solicitapeca';
import { Toast } from '../../providers/toast';
import { ConsultarSetorProvider } from '../../providers/consultar-setor/consultar-setor';
import { TipoPrioridadeProvider }  from   '../../providers/tipo-prioridade/tipo-prioridade';
/**
 * Generated class for the SolicitacaoPecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitacao-peca',
  templateUrl: 'solicitacao-peca.html',
})
export class SolicitacaoPecaPage {
  Nome:string;
  numeroPecas:number;
  setor:number;
  maquinaDestinada:string;
  NomePeca:string;
  prioridade:number;
  hora:string;
  Data:string;
  precoPeca:string;
  Prioridade: string = "Prioridade";
  Setor:string = "Setor";
  public listaSetor = [];
  public listaPriridade = [];
  

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private solicitarPecas:SolicitarPecas, 
     private toast:Toast,
     private consultarSetorProvider:ConsultarSetorProvider, 
     private tipoPrioridadeProvider:TipoPrioridadeProvider) {
       this.prioridadePegar();
       this.setorPega();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitacaoPecaPage');
  }
  setorPega(){
    this.consultarSetorProvider.todosSetores().subscribe(
      (data:any) =>{
        this.listaSetor = data;
      }
    )
  }
  prioridadePegar() {
    this.tipoPrioridadeProvider.todasPrioridade().subscribe(
      (data : any) => {
        this.listaPriridade = data;
      }
    )
  }
  voltarDashboard(){
    this.navCtrl.setRoot(DashboardPage);

  }
  solicitarPeca(){
      this.solicitarPecas.pecas(this.Nome,
        this.numeroPecas,
        this.setor,
        this.maquinaDestinada,
        this.NomePeca,
        this.prioridade,
        this.hora,
        this.Data,
        this.precoPeca).subscribe(
          (data : any) => {
            this.toast.presentToast(data.Sucesso, 5000);
          },
          (error: any) =>{
            console.log(error);
            this.toast.presentToast("Falha ao registrar peça", 5000);
          }

        );


  }
}
