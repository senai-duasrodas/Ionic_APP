import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EpiPage } from './epi';

@NgModule({
  declarations: [
    EpiPage,
  ],
  imports: [
    IonicPageModule.forChild(EpiPage),
  ],
})
export class EpiPageModule {}
