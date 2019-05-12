import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroOrdemServicoPage } from './cadastro-ordem-servico';

@NgModule({
  declarations: [
    CadastroOrdemServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroOrdemServicoPage),
  ],
})
export class CadastroOrdemServicoPageModule {}
