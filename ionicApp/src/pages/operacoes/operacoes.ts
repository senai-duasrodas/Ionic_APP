import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperacoesProvider } from '../../providers/operacoesprovider';
import {TipoStatusProvider} from '../../providers/tipo-status/tipo-status';
import { Toast } from  '../../providers/toast';

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

  operacao:string;
  descricao:string;
  statusOrdemSelecionada:string;
  tempoplanejado:string;
  execucao:string;
  
  public statusOrdem = [];
  public idOrdemcadastrada : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private operacoesProvider :OperacoesProvider,private tipoStatusProvider:TipoStatusProvider,private toast :Toast) {
    this.idOrdemcadastrada = this.navParams.data.id;
    this.tipoStatus();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperacoesPage');
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

}
