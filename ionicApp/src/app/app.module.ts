import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OperacoesPage } from '../pages/operacoes/operacoes';
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
import { DetalhamentoOrdemProvider } from '../providers/detalhamento-ordem/detalhamento-ordem';
import { ConsultaOrdemProvider } from '../providers/consulta-ordem/consulta-ordem';
import { SolicitacaoPecaPage } from '../pages/solicitacao-peca/solicitacao-peca';
import { DetalheOrdemServicoPage } from '../pages/detalhe-ordem-servico/detalhe-ordem-servico';
import { FormsModule } from '@angular/forms';
import { VerificacaoPage } from '../pages/verificacao/verificacao';
import { VerificacaoManutencaoProvider } from '../providers/verificacao-manutencao/verificacao-manutencao';
import { ApontamentoPage } from '../pages/apontamento/apontamento';
import { LancamentosProvider } from '../providers/lancamentos/lancamentos';
import { SolicitarPecas } from '../providers/solicitapeca';
import { GerarTokenProvider } from '../providers/gerar-token/gerar-token';
import { ModalVerificacaoPage } from '../pages/modal-verificacao/modal-verificacao';
import { VerificaServicoProvider } from '../providers/verifica-servico/verifica-servico';
import { TipoManutencaoProvider } from '../providers/tipo-manutencao/tipo-manutencao';
import { OperacoesProvider } from '../providers/operacoesprovider';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NovoUsuarioPage,
    DashboardPage,
    ConsultaOrdensPage,
    CadastroOrdemServicoPage,
    SolicitacaoPecaPage,
    DetalheOrdemServicoPage ,
    VerificacaoPage,
    ApontamentoPage,
    ModalVerificacaoPage,
    OperacoesPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    CadastroOrdemServicoPage,
    SolicitacaoPecaPage,
    DetalheOrdemServicoPage,
    VerificacaoPage,
    ApontamentoPage,
    ModalVerificacaoPage,
    OperacoesPage
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
    TipoPrioridadeProvider,
    DetalhamentoOrdemProvider,
    ConsultaOrdemProvider,
    VerificacaoManutencaoProvider,
    LancamentosProvider,
    SolicitarPecas,
    GerarTokenProvider,
    VerificaServicoProvider,
    TipoManutencaoProvider,
    OperacoesProvider
  ]
})
export class AppModule {}
