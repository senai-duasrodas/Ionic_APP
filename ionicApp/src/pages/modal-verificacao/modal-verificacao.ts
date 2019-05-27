import { VerificacaoPage } from './../verificacao/verificacao';
import { Toast } from './../../providers/toast';
import { VerificaServicoProvider } from './../../providers/verifica-servico/verifica-servico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalVerificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-verificacao',
  templateUrl: 'modal-verificacao.html',
})
export class ModalVerificacaoPage {
  cracha : string;
  password : string;
  validaVericacao : string = "0";
  private orderValue : any;
  private dadosVerifica : any = [];

  constructor(public navCtrl: NavController,public navParams: NavParams,public toast: Toast, public verificaServicoProvider: VerificaServicoProvider) {
    this.orderValue = this.navParams.data.id;
    console.log(this.orderValue)
  }
  public voltarVerificacao(){
    //this.navCtrl.getPrevious().data.name = validaVericacao;
    this.navCtrl.pop();
  }
  public verificaForm() {
    this.verificaServicoProvider.verificarServico(this.cracha, this.password).subscribe(
      (data : any) => {
        console.log(data)
        let data2 = JSON.stringify(data);
        console.log(data2)
        let data3 = JSON.parse(data2);
        console.log(data3)
        //data.forEach((element : any) => {
        //  this.dadosVerifica.push({
        //    numeroCracha: element.numeroCracha,
        //  })
        //});

        console.log("----------")
        console.log(this.dadosVerifica.numeroCracha)
        console.log(this.dadosVerifica.numeroCracha)
        window.localStorage.setItem(this.orderValue,this.dadosVerifica)
        //this.validaVericacao = 1;
        this.toast.presentToast("Verificação registrada com sucesso!", 7000);
        console.log("Este é o dados Login1: ");
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }
 

}
