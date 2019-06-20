import { DashboardPage } from './../dashboard/dashboard';
//import { HomePage } from './home';
import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { NovoUsuarioPage } from '../novo-usuario/novo-usuario';
//import { DashboardPage } from '../dashboard/dashboard';
import { GerarTokenProvider } from '../../providers/gerar-token/gerar-token';
import { VerificacaoPage } from '../verificacao/verificacao';
import { DetalheOrdemServicoPage } from '../detalhe-ordem-servico/detalhe-ordem-servico';
import { ConsultaOrdensPage } from '../consulta-ordens/consulta-ordens';
import { ApontamentoPage } from '../apontamento/apontamento';
import { CadastroOrdemServicoPage } from '../cadastro-ordem-servico/cadastro-ordem-servico';
import { ModalVerificacaoPage } from '../modal-verificacao/modal-verificacao';
import { OperacoesPage } from '../operacoes/operacoes';
import { SolicitaProdutoPage } from '../solicita-produto/solicita-produto';
import { Toast } from '../../providers/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cracha : string;
  password : string;
  dadosLogin2 : number;
  public dadosLogin = [];

  splash = true;
  secondPage = DashboardPage;

  constructor(public navCtrl: NavController, public login: LoginProvider,public toast: Toast, private evt : Events, private gerarTokenProvider: GerarTokenProvider) {

  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
  public logform() {
    this.login.logando(this.cracha, this.password).subscribe(
      (data : any) => {
        window.localStorage.setItem("idUsuario",data.idUsuario)
        window.localStorage.setItem("token",data.token)
        this.dadosLogin = data;
        console.log("Este é o dados Login1: ");
        console.log(this.dadosLogin)
        this.inserirToken();
      },
      (error : any) =>{
        this.toast.presentToast("Login ou senha incorretos!", 3000);
      }
    );
  }
  public inserirToken(){
    console.log("Este é o dados Login0: ");
    console.log(this.dadosLogin)
    this.gerarTokenProvider.gerarToken(this.dadosLogin).subscribe(
      (data2 : any) => {
        this.dadosLogin2 = data2;
        console.log("Este é o dados Login2: ");
        console.log(this.dadosLogin2)
        this.evt.publish("swipeEnabled");
        this.navCtrl.setRoot(DashboardPage);
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }
  public novoUsuario(){
    this.navCtrl.push(NovoUsuarioPage);
  }
}
