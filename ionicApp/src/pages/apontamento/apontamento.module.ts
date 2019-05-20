import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApontamentoPage } from './apontamento';

@NgModule({
  declarations: [
    ApontamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ApontamentoPage),
  ],
})
export class ApontamentoPageModule {}
