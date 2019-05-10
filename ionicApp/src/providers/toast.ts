import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";

@Injectable()
export class Toast{

  private toast : Toast = null;
  constructor(public toastCtrl: ToastController){

  }
  public presentToast(message: string, duracao: number){
    const toast = this.toastCtrl.create({
      message: message,
      duration: duracao
    });
    toast.present();

    return this.toast;

  }

  public toastShow(toast : string = "Processando"){
    //this.presentToast(toast);
  }
  public loadingToast(){
   if(this.toast === null || this.toast === undefined){
      return;
    }

    //this.toast.dismissAll();
  }

}
