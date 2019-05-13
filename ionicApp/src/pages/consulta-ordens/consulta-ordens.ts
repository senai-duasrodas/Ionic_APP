import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultOrdemProvider } from '../../providers/consult-ordem/consult-ordem';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the ConsultaOrdensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-ordens',
  templateUrl: 'consulta-ordens.html',
})
export class ConsultaOrdensPage {
  
  public ordem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public consultOrdemProvider: ConsultOrdemProvider) {
    this.consultOrdem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaOrdensPage');
  }
  public consultOrdem() {
    this.consultOrdemProvider.consultarOrdem().subscribe(
      (data : any) => {
        this.ordem=data;
        console.log(this.ordem);
      },
      (error : any) =>{
        console.log("Deu errado");
      }
    );
  }
  public voltarDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }

}
