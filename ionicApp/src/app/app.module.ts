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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NovoUsuarioPage
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
    NovoUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    HttpProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NovoUsuarioProvider,
    LoginProvider
  ]
})
export class AppModule {}
