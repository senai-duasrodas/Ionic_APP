import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ConsultaOrdensPage} from '../pages/consulta-ordens/consulta-ordens';
import {CadastroOrdemServicoPage} from '../pages/cadastro-ordem-servico/cadastro-ordem-servico';
import {SolicitacaoPecaPage} from '../pages/solicitacao-peca/solicitacao-peca';
import {VerificacaoPage} from '../pages/verificacao/verificacao';
import {ApontamentoPage} from '../pages/apontamento/apontamento';
import { DashboardPage } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  public swipeEnabled = false;

  pages: Array<{title: string, component: any, img: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private evt : Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Consultar OS', component: ConsultaOrdensPage, img: "../assets/imgs/consultar.png" },
      { title: 'Cadastrar OS', component: CadastroOrdemServicoPage, img: "../assets/imgs/cadastrar.png" },
      { title: 'Solicitar Peça', component: SolicitacaoPecaPage, img: "../assets/imgs/solicitar peca2.png" },
      { title: 'Verificar OS', component: VerificacaoPage, img: "../assets/imgs/consultar.png" },
      { title: 'Apontamentos', component: ApontamentoPage, img: "../assets/imgs/apontamento.png" },
      { title: 'Consultar OS', component: ConsultaOrdensPage, img: "../assets/imgs/consultar.png" },
      { title: 'Cadastrar OS', component: CadastroOrdemServicoPage, img: "../assets/imgs/consultar.png" },
      { title: 'Solicitar Peça', component: SolicitacaoPecaPage, img: "../assets/imgs/consultar.png" },
      { title: 'Verificar OS', component: VerificacaoPage, img: "../assets/imgs/consultar.png" },
      { title: 'Apontamentos', component: ApontamentoPage, img: "../assets/imgs/consultar.png" },
    ];

    this.evt.subscribe("swipeEnabled", () => {
      this.swipeEnabled = true;
    });

    this.evt.subscribe("swipeDisabled", () => {
      this.swipeEnabled = false;
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }


}
