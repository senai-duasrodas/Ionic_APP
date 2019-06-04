import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaOrdensPage } from '../consulta-ordens/consulta-ordens';
import { CadastroOrdemServicoPage } from '../cadastro-ordem-servico/cadastro-ordem-servico';
import { SolicitaProdutoPage } from '../solicita-produto/solicita-produto';
import { VerificacaoPage } from '../verificacao/verificacao';
import { ApontamentoPage } from '../apontamento/apontamento';
import { AutenticaUsuarioProvider } from '../../providers/autentica-usuario/autentica-usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  usuario : string;
  token : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public autenticaUsuarioProvider : AutenticaUsuarioProvider) {
    this.usuario = window.localStorage.getItem("idUsuario")
    this.token = window.localStorage.getItem("token")
    this.autenticaUsuario()
  }
  public consultOrdem(){
    this.navCtrl.push(ConsultaOrdensPage);
  }
  public cadastroOrdem(){
    this.navCtrl.push(CadastroOrdemServicoPage);
  }
  public solicitarPecas(){
    this.navCtrl.push(SolicitaProdutoPage);
  }
  public apontamento(){
    this.navCtrl.push(ApontamentoPage);
  }
  public autenticaUsuario(){
    console.log("Testessss")
    let id = Number(this.usuario)
    this.autenticaUsuarioProvider.verificaUsuario(id, this.token).subscribe(
      (data : any) => {
        console.log("Autenticação Realizada com Sucesso!!!!!")
      },
      (error : any) =>{
        this.navCtrl.setRoot(HomePage);
      }
    );
  }
  public refresh(){
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('token');
    this.navCtrl.setRoot(HomePage);
  }

}
