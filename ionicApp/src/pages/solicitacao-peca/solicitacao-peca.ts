import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from  '../dashboard/dashboard';

/**
 * Generated class for the SolicitacaoPecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitacao-peca',
  templateUrl: 'solicitacao-peca.html',
})
export class SolicitacaoPecaPage {
  Nome:string;
  numeroPecas:number;
  setor:string;
  maquinaDestinada:string;
  funcioRequisitoPeca:string;
  prioridade:string;
  hora:string;
  Data:Date;
  precoPeca:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitacaoPecaPage');
  }
  voltarDashboard(){
    this.navCtrl.setRoot(DashboardPage);

  }
  solicitarPeca(){

  }
}
