import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NovoUsuarioPage } from '../pages/novo-usuario/novo-usuario';
import { Toast } from '../providers/toast';
import { NovoUsuarioProvider } from '../providers/novo-usuario/novo-usuario';
import { HttpProvider } from '../providers/http';
import { LoginProvider } from '../providers/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ConsultaOrdensPage } from '../pages/consulta-ordens/consulta-ordens';
import { CadastroOrdemServicoPage } from '../pages/cadastro-ordem-servico/cadastro-ordem-servico';
import { ConsultarSetorProvider } from '../providers/consultar-setor/consultar-setor';
import { CadastroOrdemProvider } from '../providers/cadastro-ordem/cadastro-ordem';
import { ConsultOrdemProvider } from '../providers/consult-ordem/consult-ordem';
import { TipoStatusProvider } from '../providers/tipo-status/tipo-status';
import { TipoPrioridadeProvider } from '../providers/tipo-prioridade/tipo-prioridade';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NovoUsuarioPage,
    DashboardPage,
    ConsultaOrdensPage,
    CadastroOrdemServicoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NovoUsuarioPage,
    DashboardPage,
    ConsultaOrdensPage,
    CadastroOrdemServicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    HttpProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NovoUsuarioProvider,
    LoginProvider,
    ConsultarSetorProvider,
    CadastroOrdemProvider,
    ConsultOrdemProvider,
    TipoStatusProvider,
    TipoPrioridadeProvider
  ]
})
export class AppModule {}