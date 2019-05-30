import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperacoesPage } from './operacoes';

@NgModule({
  declarations: [
    OperacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(OperacoesPage),
  ],
})
export class OperacoesPageModule {}
