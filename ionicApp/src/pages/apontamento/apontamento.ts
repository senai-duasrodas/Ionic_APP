import { Toast } from './../../providers/toast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LancamentosProvider } from '../../providers/lancamentos/lancamentos';
import { DashboardPage } from '../dashboard/dashboard';
import { AutenticandoProvider } from '../../providers/autenticando';
import { HomePage } from '../home/home';

/**
 * Generated class for the ApontamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apontamento',
  templateUrl: 'apontamento.html',
})
export class ApontamentoPage {

  dataApontamento : string;
  tempoDedicado : string;
  usuario : string;
  public verificacao = [];
  private orderKey : any;
  usuario2 : string;
  token : string;

  constructor(public navCtrl: NavController, private toast : Toast, public autenticandoProvider: AutenticandoProvider, public navParams: NavParams, public lancamentosProvider: LancamentosProvider) {
    this.usuario2 = window.localStorage.getItem("idUsuario")
    this.orderKey = this.navParams.data.id;
    this.autenticaUsuario()
  }
  public autenticaUsuario(){
    this.usuario2 = window.localStorage.getItem("idUsuario")
    let id = Number(this.usuario2)
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
  public realizarApontamento() {
    this.lancamentosProvider.lancamento(this.orderKey,this.dataApontamento,this.tempoDedicado,this.usuario).subscribe(
      (data : any) => {
        this.verificacao=data;
        this.toast.presentToast("Apontamento cadastro com sucesso!", 7000);
        console.log(this.verificacao);
      },
      (error : any) =>{
        console.log("Deu errado");
        this.toast.presentToast("Erro ao registrar Verificação!", 7000);
      }
    );
  }
  public voltarDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }
}
