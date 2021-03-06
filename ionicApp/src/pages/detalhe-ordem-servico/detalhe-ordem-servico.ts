import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaOrdemProvider } from '../../providers/consulta-ordem/consulta-ordem';
import { TipoStatusProvider } from '../../providers/tipo-status/tipo-status';
import { TipoPrioridadeProvider } from '../../providers/tipo-prioridade/tipo-prioridade';
import { VerificacaoPage } from '../verificacao/verificacao';
import { ApontamentoPage } from '../apontamento/apontamento';
import { SolicitaProdutoPage } from '../solicita-produto/solicita-produto';
import { OperacoesPage } from '../operacoes/operacoes';
import { AutenticandoProvider } from '../../providers/autenticando';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetalheOrdemServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-ordem-servico',
  templateUrl: 'detalhe-ordem-servico.html',
})
export class DetalheOrdemServicoPage {

  public ordem = [];
  public statusOrdem = [];
  public prioridade = [];
  public textoDescricacao = [];
  statusOrdemSelecionada : string;
  prioridadeSelecionada : string;
  private orderKey : any;
  private userDetalhe : any;
  usuario : string;
  token : string;
  textoVelho : string;
  textoNovo : string;
  tamanhoDoTextoQueVouQuebrar: number;
  private visivel:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public autenticandoProvider: AutenticandoProvider, public consultaOrdemProvider: ConsultaOrdemProvider, public tipoStatusProvider: TipoStatusProvider, public tipoPrioridadeProvider: TipoPrioridadeProvider) {
    this.orderKey = this.navParams.data.id;
    this.autenticaUsuario();
    this.tipoStatus();
    this.tipoPrioridade();
    this.consultaOrdem();
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
  public consultaOrdem() {
    this.consultaOrdemProvider.detalhamentoOrdem(this.orderKey).subscribe(
      (data : any) => {
        this.ordem=data;
        console.log("Tela de Detalhamentoooo123");
        console.log(this.ordem);
        let ini = this.ordem[0];
        this.userDetalhe = ini["Usuario_idUsuario"]
        this.verificaUsuarioDetalhe();
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public verificaUsuarioDetalhe() {
    console.log(this.visivel)
    if(this.userDetalhe==window.localStorage.getItem("idUsuario")){
      this.visivel = true;
      console.log(this.visivel)
    }
  }

  public tipoStatus() {
    this.tipoStatusProvider.todosStatus().subscribe(
      (data : any) => {
        this.statusOrdem=data;
        console.log(this.statusOrdem)
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public tipoPrioridade() {
    this.tipoPrioridadeProvider.todasPrioridade().subscribe(
      (data : any) => {
        this.prioridade=data;
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public voltarDashboard(){
    this.navCtrl.pop();
  }
  public verificacao(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(VerificacaoPage,obj);
  }
  public solicitaPeca(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(SolicitaProdutoPage,obj);
  }
  public apontamento(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(ApontamentoPage,obj);
  }
  public operacoes(){
    let obj = {
      id : this.orderKey
    }
    this.navCtrl.push(OperacoesPage,obj);
  }
}
