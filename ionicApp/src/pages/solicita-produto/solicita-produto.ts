import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from  '../dashboard/dashboard';
import { SolicitarPecas } from '../../providers/solicitapeca';
import { Toast } from '../../providers/toast';
import { ConsultarSetorProvider } from '../../providers/consultar-setor/consultar-setor';
import { TipoPrioridadeProvider }  from   '../../providers/tipo-prioridade/tipo-prioridade';
import { ConsultarMaquinasProvider } from '../../providers/consultar-maquinas/consultar-maquinas';
import { AutenticandoProvider } from '../../providers/autenticando';
import { HomePage } from '../home/home';
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

  usuario : string;
  token : string;
  numeroPecas:number;
  setor:number;
  maquinaDestinada:string;
  NomePeca:string;
  prioridade:number;
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
    public autenticandoProvider: AutenticandoProvider,
    private tipoPrioridadeProvider:TipoPrioridadeProvider) {
      this.autenticaUsuario()
      this.orderKey = this.navParams.data.id;
      console.log( this.orderKey)
      this.prioridadePegar();
      this.setorPega();
      this.showMaquinas();
  }
  public autenticaUsuario(){
    this.usuario = window.localStorage.getItem("idUsuario")
    let id = Number(this.usuario)
    this.token = window.localStorage.getItem("token")
    this.autenticandoProvider.verificaUsuario(id, this.token).subscribe(
      (data : any) => {
        console.log("Autenticação Realizada com Sucesso!!!!!")
      },
      (error : any) =>{
        this.navCtrl.setRoot(HomePage);
      }
    );

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
  voltar(){
    this.navCtrl.pop();
  }
  solicitarPeca(){
      let usuario = ""
      usuario = window.localStorage.getItem("idUsuario")
      this.solicitarPecas.pecas(this.numeroPecas,
        this.setor,
        this.maquinaDestinada,
        this.NomePeca,
        this.prioridade,
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
