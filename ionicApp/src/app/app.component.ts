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

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private evt : Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Consultar OS', component: ConsultaOrdensPage },
      { title: 'Cadastrar OS', component: CadastroOrdemServicoPage },
      { title: 'Solicitar Peça', component: SolicitacaoPecaPage },
      { title: 'Verificar OS', component: VerificacaoPage },
      { title: 'Apontamentos', component: ApontamentoPage },
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
