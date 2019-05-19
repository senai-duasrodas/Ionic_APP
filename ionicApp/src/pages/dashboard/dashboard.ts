import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaOrdensPage } from '../consulta-ordens/consulta-ordens';
import { CadastroOrdemServicoPage } from '../cadastro-ordem-servico/cadastro-ordem-servico';
import { SolicitacaoPecaPage } from '../solicitacao-peca/solicitacao-peca';
import { VerificacaoPage } from '../verificacao/verificacao';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  public consultOrdem(){
    this.navCtrl.setRoot(ConsultaOrdensPage);
  }
  public cadastroOrdem(){
    this.navCtrl.setRoot(CadastroOrdemServicoPage);
  }
  public solicitarPecas(){
    this.navCtrl.setRoot(SolicitacaoPecaPage);
  }
  public verificacao(){
    this.navCtrl.setRoot(VerificacaoPage);
  }

}
