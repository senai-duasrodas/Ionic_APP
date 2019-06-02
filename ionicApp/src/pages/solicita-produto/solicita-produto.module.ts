import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitaProdutoPage } from './solicita-produto';

@NgModule({
  declarations: [
    SolicitaProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitaProdutoPage),
  ],
})
export class SolicitaProdutoPageModule {}
