import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerificacaoManutencaoProvider } from '../../providers/verificacao-manutencao/verificacao-manutencao';
import { Toast } from '../../providers/toast';

/**
 * Generated class for the VerificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verificacao',
  templateUrl: 'verificacao.html',
})
export class VerificacaoPage {

  public verificacao = [];
  solucaoRealizada : string;
  dataFim : string;
  problemaResolvido : string;
  responsavel1 : string;
  responsavel2 : string;
  private orderKey : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast : Toast, public verificacaoManutencaoProvider: VerificacaoManutencaoProvider) {
    this.orderKey = this.navParams.data.id;
  }
  public verificaOrdem() {
    this.verificacaoManutencaoProvider.verificacao(this.orderKey,this.solucaoRealizada,this.dataFim,this.problemaResolvido,this.responsavel1,this.responsavel2).subscribe(
      (data : any) => {
        this.verificacao=data;
        this.toast.presentToast("Verificação registrada com sucesso!", 7000);
        console.log(this.verificacao);
      },
      (error : any) =>{
        console.log("Deu errado");
        this.toast.presentToast("Erro ao registrar Verificação!", 7000);
      }
    );
  }
  public voltarDashboard(){
    this.navCtrl.pop();
  }
}
