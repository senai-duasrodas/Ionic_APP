import { ModalVerificacaoPage } from './../modal-verificacao/modal-verificacao';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { VerificacaoManutencaoProvider } from '../../providers/verificacao-manutencao/verificacao-manutencao';
import { Toast } from '../../providers/toast';
import { AutenticandoProvider } from '../../providers/autenticando';
import { HomePage } from '../home/home';
//import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AvaliarServicoProvider } from '../../providers/avaliar-servico/avaliar-servico';

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
  idUsuario1: string;
  idUsuario2: string;
  avaliador: any;
  textoAvaliar1 : string;
  textoAvaliar2 : string;
  valorAvaliacao1 : string;
  valorAvaliado1: number;
  valorAvaliacao2 : string;
  valorAvaliado2: number;
  usuarioVerifica1: number;
  usuarioVerifica2: number;
  verificacaoValor: string;
  verificacaoNumero: number;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams,public autenticandoProvider: AutenticandoProvider,private toast : Toast, public verificacaoManutencaoProvider: VerificacaoManutencaoProvider,public avaliarServicoProvider: AvaliarServicoProvider) {
    this.autenticaUsuario()
    this.orderKey = this.navParams.data.id;
    localStorage.removeItem('1');
    localStorage.removeItem('2');
    localStorage.removeItem('verifica1');
    localStorage.removeItem('verifica2');
    localStorage.removeItem('textoAvaliar1');
    localStorage.removeItem('textoAvaliar2');
    localStorage.removeItem('valorAvaliacao1');
    localStorage.removeItem('valorAvaliacao2');
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
    this.verificacaoManutencaoProvider.verificacao(this.orderKey,this.solucaoRealizada,this.problemaResolvido,this.responsavel1,this.responsavel2,this.usuario2).subscribe(
      (data : any) => {
        this.verificacao=data;
        this.toast.presentToast("Verificação Registrada com sucesso!", 3000);
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        this.avaliarServico();
      },
      (error : any) =>{
        this.toast.presentToast("A verificação Falhou!", 3000);
      }
    );
  }
  public avaliarServico() {
    this.verificacaoNumero = parseInt(this.verificacaoValor)
    this.textoAvaliar1 = this.idUsuario2 = window.localStorage.getItem("textoAvaliar1")
    this.textoAvaliar2 = this.idUsuario2 = window.localStorage.getItem("textoAvaliar2")
    this.valorAvaliacao1 = this.idUsuario2 = window.localStorage.getItem("valorAvaliacao1")
    this.valorAvaliado1 = parseInt(this.valorAvaliacao1)
    this.valorAvaliacao2 = this.idUsuario2 = window.localStorage.getItem("valorAvaliacao2")
    this.valorAvaliado2 = parseInt(this.valorAvaliacao2)
    this.idUsuario1 = window.localStorage.getItem("verifica1")
    this.idUsuario2 = window.localStorage.getItem("verifica2")
    this.usuarioVerifica1 = parseInt(this.idUsuario1)
    this.usuarioVerifica2 = parseInt(this.idUsuario2)
    
    this.avaliarServicoProvider.avaliar(this.textoAvaliar1,this.textoAvaliar2, this.valorAvaliado1,this.valorAvaliado2, this.usuarioVerifica1,this.usuarioVerifica2,this.orderKey).subscribe(
      (data : any) => {
        this.verificacao=data;
        this.toast.presentToast("Avaliação Registrada com sucesso!", 7000);
        localStorage.removeItem('textoAvaliar1');
        localStorage.removeItem('textoAvaliar2');
        localStorage.removeItem('valorAvaliacao1');
        localStorage.removeItem('valorAvaliacao2');
      },
      (error : any) =>{
        this.toast.presentToast("A avaliação Falhou!", 7000);
      }
    );
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
