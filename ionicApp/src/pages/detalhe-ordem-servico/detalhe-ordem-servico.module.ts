import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheOrdemServicoPage } from './detalhe-ordem-servico';

@NgModule({
  declarations: [
    DetalheOrdemServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheOrdemServicoPage),
  ],
})
export class DetalheOrdemServicoPageModule {}
