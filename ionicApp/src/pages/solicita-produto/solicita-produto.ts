import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from  '../dashboard/dashboard';
import { SolicitarPecas } from '../../providers/solicitapeca';
import { Toast } from '../../providers/toast';
import { ConsultarSetorProvider } from '../../providers/consultar-setor/consultar-setor';
import { TipoPrioridadeProvider }  from   '../../providers/tipo-prioridade/tipo-prioridade';
import { ConsultarMaquinasProvider } from '../../providers/consultar-maquinas/consultar-maquinas';
/**
 * Generated class for the SolicitaProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicita-produto',
  templateUrl: 'solicita-produto.html',
})
export class SolicitaProdutoPage {

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
  public todasMaquinas = [];
  public listaPriridade = [];
  private orderKey : any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private solicitarPecas:SolicitarPecas, 
    private toast:Toast,
    private consultarSetorProvider:ConsultarSetorProvider,
    private consultarMaquinasProvider: ConsultarMaquinasProvider,
    private tipoPrioridadeProvider:TipoPrioridadeProvider) {
      this.orderKey = this.navParams.data.id;
      console.log( this.orderKey)
      this.prioridadePegar();
      this.setorPega();
      this.showMaquinas(); 
  }

  setorPega(){
    this.consultarSetorProvider.todosSetores().subscribe(
      (data:any) =>{
        this.listaSetor = data;
      }
    )
  }
  showMaquinas(){
    this.consultarMaquinasProvider.todasMaquinas().subscribe(
      (data:any) =>{
        this.todasMaquinas = data;
        console.log(data)
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
      let usuario = ""
      usuario = window.localStorage.getItem("idUsuario")
      this.solicitarPecas.pecas(this.numeroPecas,
        this.setor,
        this.maquinaDestinada,
        this.NomePeca,
        this.prioridade,
        this.hora,
        this.Data,
        this.precoPeca,
        this.orderKey,
        usuario
      ).subscribe(
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
