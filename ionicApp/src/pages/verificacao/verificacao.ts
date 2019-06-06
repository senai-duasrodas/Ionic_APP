import { ModalVerificacaoPage } from './../modal-verificacao/modal-verificacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { VerificacaoManutencaoProvider } from '../../providers/verificacao-manutencao/verificacao-manutencao';
import { Toast } from '../../providers/toast';
import { AutenticandoProvider } from '../../providers/autenticando';
import { HomePage } from '../home/home';

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
  private validacao : any;
  usuario : string;
  token : string;
  usuario2 : any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams,public autenticandoProvider: AutenticandoProvider,private toast : Toast, public verificacaoManutencaoProvider: VerificacaoManutencaoProvider) {
    this.autenticaUsuario()
    this.orderKey = this.navParams.data.id;
    localStorage.removeItem('1');
    localStorage.removeItem('2');
    this.validacao = this.navParams.get('name') || null;
    console.log("Aqui esta a validação")
    console.log(this.validacao)
    this.usuario2 = window.localStorage.getItem("idUsuario")
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
  public verificaOrdem() {
    this.responsavel1 = window.localStorage.getItem("1")
    this.responsavel2 = window.localStorage.getItem("2")
    this.verificacaoManutencaoProvider.verificacao(this.orderKey,this.solucaoRealizada,this.dataFim,this.problemaResolvido,this.responsavel1,this.responsavel2,this.usuario2).subscribe(
      (data : any) => {
        this.verificacao=data;
        this.toast.presentToast("Verificação Registrada com sucesso!", 7000);
        console.log(this.verificacao);
        localStorage.removeItem('1');
        localStorage.removeItem('2');
      },
      (error : any) =>{
        console.log("Deu errado");
        this.toast.presentToast("Erro ao autenticar usuário!", 7000);
        localStorage.removeItem('1');
        localStorage.removeItem('2');
      }
    );
  }
  public validar(){
    let teste = window.localStorage.getItem("1")
    this.toast.presentToast(teste, 7000);
    if (teste == "1"){
      this.toast.presentToast("Validacao 1 deu Certo!", 7000);
    }
  }
  public validar2(){
    let teste = window.localStorage.getItem("2")
    this.toast.presentToast(teste, 7000);
    if (teste == "1"){

    }
  }
  public voltarDetalhe(){
    this.navCtrl.pop();
  }
  public modalVerificacao(numero: number) {
    let obj = {
      id : numero
    }
    const modal = this.modalCtrl.create(ModalVerificacaoPage,obj);
    modal.present();
  }
}
