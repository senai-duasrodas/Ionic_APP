import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ConsultaOrdensPage} from '../pages/consulta-ordens/consulta-ordens';
import {CadastroOrdemServicoPage} from '../pages/cadastro-ordem-servico/cadastro-ordem-servico';
import {VerificacaoPage} from '../pages/verificacao/verificacao';
import {ApontamentoPage} from '../pages/apontamento/apontamento';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SolicitaProdutoPage } from '../pages/solicita-produto/solicita-produto';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { MinhasosPage } from '../pages/minhasos/minhasos';
import { EpiPage } from '../pages/epi/epi';



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
      // { title: 'Perfil de Usuário', component: PerfilUsuarioPage, img: "../assets/imgs/logo/Consultar.png" },
      { title: 'Consultar OS', component: ConsultaOrdensPage, img: "../assets/imgs/logo/Consultar.png" },
      { title: 'Minhas OS' , component : MinhasosPage , img: "../assets/imgs/logo/cadastrar.png"},
      { title: 'Cadastrar OS', component: CadastroOrdemServicoPage, img: "../assets/imgs/logo/cadastrar.png" },
      { title: 'Solicitar Produto', component: SolicitaProdutoPage, img: "../assets/imgs/logo/solicitar.png" },
      { title: 'Epi', component: EpiPage, img: "../assets/imgs/logo/Consultar.png" }
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
