import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperacoesProvider } from '../../providers/operacoesprovider';
import {TipoStatusProvider} from '../../providers/tipo-status/tipo-status';
import { Toast } from  '../../providers/toast';
import { AutenticandoProvider } from '../../providers/autenticando';
import { HomePage } from '../home/home';
import { DetalheOrdemServicoPage } from '../detalhe-ordem-servico/detalhe-ordem-servico';
/**
 * Generated class for the OperacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operacoes',
  templateUrl: 'operacoes.html',
})
export class OperacoesPage {

  usuario : string;
  token : string;
  operacao:string;
  descricao:string;
  statusOrdemSelecionada:string;
  tempoplanejado:string;
  execucao:string;

  public statusOrdem = [];
  public idOrdemcadastrada : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private operacoesProvider :OperacoesProvider,private tipoStatusProvider:TipoStatusProvider,private toast :Toast,public autenticandoProvider: AutenticandoProvider) {
    this.idOrdemcadastrada = this.navParams.data.id;
    this.tipoStatus();
    this.autenticaUsuario()
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


  RegistroOperacoes(){
    this.operacoesProvider.RegistraOperacoes(
      this.operacao,
      this.descricao,
      this.statusOrdemSelecionada,
      this.tempoplanejado,
      this.execucao,
      this.idOrdemcadastrada).subscribe(
      (data : any) => {
        this.toast.presentToast(data.Sucesso, 5000);
      },
      (error: any) => {
        this.toast.presentToast("Falha ao registrar da operação", 5000);
      }
    )
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
public voltarDetalheOrdemServico(){
    this.navCtrl.setRoot(DetalheOrdemServicoPage);
  }
}
