import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalVerificacaoPage } from './modal-verificacao';

@NgModule({
  declarations: [
    ModalVerificacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalVerificacaoPage),
  ],
})
export class ModalVerificacaoPageModule {}
