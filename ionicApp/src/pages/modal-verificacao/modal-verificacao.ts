import { Toast } from './../../providers/toast';
import { VerificaServicoProvider } from './../../providers/verifica-servico/verifica-servico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticandoProvider } from '../../providers/autenticando';
import { HomePage } from '../home/home';

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
  usuario : string;
  token : string;
  cracha : string;
  password : string;
  validaVericacao : string = "0";
  valorAvaliacao: number = 5;
  textoAvaliar : string;
  numAvaliacao : string;
  private orderValue : any;
  private dadosVerifica : any = [];
  a : number = 0;
  texto1 : string; 
  texto2 : string; 
  valorUsuario: any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public autenticandoProvider: AutenticandoProvider,public toast: Toast, public verificaServicoProvider: VerificaServicoProvider) {
    this.autenticaUsuario()
    this.orderValue = this.navParams.data.id;
    console.log(this.orderValue)
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
  public voltarVerificacao(){
    //this.navCtrl.getPrevious().data.name = validaVericacao;
    this.navCtrl.pop();
  }
  public avaliarServico(){
    this.texto1 = window.localStorage.getItem("textoAvaliar1")
    console.log(this.texto1)
    if(this.orderValue == 1){
      window.localStorage.setItem("textoAvaliar1",this.textoAvaliar)
      window.localStorage.setItem("valorAvaliacao1",this.valorAvaliacao.toString())
    }else if(this.orderValue == 2){
      window.localStorage.setItem("textoAvaliar2",this.textoAvaliar)
      window.localStorage.setItem("valorAvaliacao2",this.valorAvaliacao.toString())
    }
    this.texto1 = window.localStorage.getItem("textoAvaliar1")
    this.texto2 = window.localStorage.getItem("textoAvaliar2")
    console.log(this.texto1)
    this.toast.presentToast("Avaliação realizada com sucesso!", 2500);
  }
  public verificaForm() {
    this.verificaServicoProvider.verificarServico(this.cracha, this.password).subscribe(
      (data : any) => {
        console.log("----------")
        //console.log(this.dadosVerifica.numeroCracha)
        this.toast.presentToast("Usuário autenticado com sucesso!", 3000);
        console.log("Este é o dados Login1: ");
        this.valorUsuario = data["usuarioVerificador"];
        this.valorUsuario = this.valorUsuario[0];
        console.log("--------Este é o usuario e cracha")
        console.log(this.valorUsuario["idUsuario"])
        console.log(this.valorUsuario["numeroCracha"])
        window.localStorage.setItem(this.orderValue,this.valorUsuario["numeroCracha"])
        this.a = 1;
        if(this.orderValue == 1){
          window.localStorage.setItem("verifica1",this.valorUsuario["idUsuario"])
        }else if(this.orderValue == 2){
          window.localStorage.setItem("verifica2",this.valorUsuario["idUsuario"])
        }
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }
  log(valor){
    console.log(valor);
    this.valorAvaliacao = valor;
  }

}
