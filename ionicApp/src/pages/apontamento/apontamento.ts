import { Toast } from './../../providers/toast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LancamentosProvider } from '../../providers/lancamentos/lancamentos';
import { DashboardPage } from '../dashboard/dashboard';

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

  constructor(public navCtrl: NavController, private toast : Toast, public navParams: NavParams, public lancamentosProvider: LancamentosProvider) {
  }
  public realizarApontamento() {
    this.lancamentosProvider.lancamento(this.dataApontamento,this.tempoDedicado,this.usuario).subscribe(
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