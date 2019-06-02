import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaOrdensPage } from '../consulta-ordens/consulta-ordens';
import { CadastroOrdemServicoPage } from '../cadastro-ordem-servico/cadastro-ordem-servico';
import { SolicitacaoPecaPage } from '../solicitacao-peca/solicitacao-peca';
import { VerificacaoPage } from '../verificacao/verificacao';
import { ApontamentoPage } from '../apontamento/apontamento';

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
  public consultOrdem(){
    this.navCtrl.push(ConsultaOrdensPage);
  }
  public cadastroOrdem(){
    this.navCtrl.push(CadastroOrdemServicoPage);
  }
  public solicitarPecas(){
    this.navCtrl.push(SolicitacaoPecaPage);
  }
  public apontamento(){
    this.navCtrl.push(ApontamentoPage);
  }
  public refresh(){
    document.location.reload(true);
  }

}
