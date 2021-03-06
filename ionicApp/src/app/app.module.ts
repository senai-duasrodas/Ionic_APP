import { AutenticacaoProvider } from './../providers/autenticacao/autenticacao';
import { AutenticaUsuarioProvider } from './../providers/autentica-usuario/autentica-usuario';
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
import { FormsModule } from '@angular/forms';

//Páginas

import { NovoUsuarioPage } from '../pages/novo-usuario/novo-usuario';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ConsultaOrdensPage } from '../pages/consulta-ordens/consulta-ordens';
import { CadastroOrdemServicoPage } from '../pages/cadastro-ordem-servico/cadastro-ordem-servico';
import { DetalheOrdemServicoPage } from '../pages/detalhe-ordem-servico/detalhe-ordem-servico';
import { VerificacaoPage } from '../pages/verificacao/verificacao';
import { ApontamentoPage } from '../pages/apontamento/apontamento';
import { ModalVerificacaoPage } from '../pages/modal-verificacao/modal-verificacao';
import { SolicitaProdutoPage } from '../pages/solicita-produto/solicita-produto';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { MinhasosPage } from '../pages/minhasos/minhasos';
import { EpiPage } from '../pages/epi/epi';
import { ModalEpiPage } from '../pages/modal-epi/modal-epi'

//Providers

import { Toast } from '../providers/toast';
import { NovoUsuarioProvider } from '../providers/novo-usuario/novo-usuario';
import { HttpProvider } from '../providers/http';
import { LoginProvider } from '../providers/login/login';
import { ConsultarSetorProvider } from '../providers/consultar-setor/consultar-setor';
import { CadastroOrdemProvider } from '../providers/cadastro-ordem/cadastro-ordem';
import { ConsultOrdemProvider } from '../providers/consult-ordem/consult-ordem';
import { TipoStatusProvider } from '../providers/tipo-status/tipo-status';
import { TipoPrioridadeProvider } from '../providers/tipo-prioridade/tipo-prioridade';
import { DetalhamentoOrdemProvider } from '../providers/detalhamento-ordem/detalhamento-ordem';
import { ConsultaOrdemProvider } from '../providers/consulta-ordem/consulta-ordem';
import { VerificacaoManutencaoProvider } from '../providers/verificacao-manutencao/verificacao-manutencao';
import { LancamentosProvider } from '../providers/lancamentos/lancamentos';
import { SolicitarPecas } from '../providers/solicitapeca';
import { GerarTokenProvider } from '../providers/gerar-token/gerar-token';
import { VerificaServicoProvider } from '../providers/verifica-servico/verifica-servico';
import { TipoManutencaoProvider } from '../providers/tipo-manutencao/tipo-manutencao';
import { OperacoesProvider } from '../providers/operacoesprovider';
import { ConsultarMaquinasProvider } from '../providers/consultar-maquinas/consultar-maquinas';
import { AutenticacaouserProvider } from '../providers/autenticacaouser/autenticacaouser';
import { AutenticandoProvider } from '../providers/autenticando';
import { AvaliarServicoProvider } from '../providers/avaliar-servico/avaliar-servico';
import { Messages } from '../providers/menssages';
import { MinhasOSProvider } from '../providers/minhasos';
import { MudaStatusProvider } from '../providers/mudastatusprovider';

//Componentes
import { IonRatingComponent } from './../components/ion-rating/ion-rating';
import { BuscaEpiProvider } from '../providers/epis/busca-epi/busca-epi';
import { EnviaDadosEpiProvider } from '../providers/epis/envia-dados-epi/envia-dados-epi';
import { JustificaEpiProvider } from '../providers/epis/justifica-epi/justifica-epi';

// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NovoUsuarioPage,
    DashboardPage,
    ConsultaOrdensPage,
    CadastroOrdemServicoPage,
    SolicitaProdutoPage,
    DetalheOrdemServicoPage ,
    VerificacaoPage,
    ApontamentoPage,
    ModalVerificacaoPage,
    OperacoesPage,
    IonRatingComponent,
    PerfilUsuarioPage,
    MinhasosPage,
    EpiPage,
    ModalEpiPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // SweetAlert2Module,
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
    SolicitaProdutoPage,
    DetalheOrdemServicoPage,
    VerificacaoPage,
    ApontamentoPage,
    ModalVerificacaoPage,
    OperacoesPage,
    PerfilUsuarioPage,
    MinhasosPage,
    EpiPage,
    ModalEpiPage
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
    OperacoesProvider,
    ConsultarMaquinasProvider,
    AutenticaUsuarioProvider,
    AutenticacaouserProvider,
    AutenticandoProvider,
    AvaliarServicoProvider,
    Messages,
    MinhasOSProvider,
    MudaStatusProvider,
    BuscaEpiProvider,
    EnviaDadosEpiProvider,
    JustificaEpiProvider,
    
  ]
})
export class AppModule {}
