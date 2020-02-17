import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController,ModalOptions } from 'ionic-angular';
import { MinhasosPage } from '../minhasos/minhasos';
import { EpiPage } from '../epi/epi';
import { EnviaDadosEpiProvider } from '../../providers/epis/envia-dados-epi/envia-dados-epi';

import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalEpiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-epi',
  templateUrl: 'modal-epi.html',
})
export class ModalEpiPage {

  public justificativa:string = '';

  public ListaepiFalse: any =[]; //apenas para mostrar as epi DEPRECATED
  public ListaEPI : any = []; // recebera a lista de epi com todas sendo true  e false  para mandar para o server
  public objCompleto : any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,public enviaDadosEpiProvider:EnviaDadosEpiProvider,public viewCtrl: ViewController) {
    this.objCompleto=this.navParams.data;


    this.mostraLista();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalEpiPage');
  }

  // openModal() {    
  //   console.log("Rate APP btn clicked ");
  //   const modalOptions: ModalOptions = {
  //     cssClass: "ratePageModal"
  //   };
  //   const modal = this.modalCtrl.create(RatePage, {}, modalOptions);
  //   modal.present();
  // }
  public form = [
    { val: 'Avental', isChecked: false,Icon:'fas fa-tshirt fa-3x' },
    { val: 'protetor auricular', isChecked: false,Icon:'fas fa-headphones fa-3x' },
    { val: 'oculos proteçao', isChecked: true,Icon:'fas fa-glasses fa-3x' },
    { val: 'Luvas', isChecked: true,Icon:'fas fa-hand-paper fa-3x' },

  ];

  public mostraLista(){
     this.ListaEPI = this.objCompleto.epis;
    //  console.log(this.objCompleto.epis);
    //  this.objCompleto
    // console.log(this.objCompleto);
  }

  public EnviaDadosServer(){
    // if(this.temConteudo.lenght != 0){
      this.navCtrl.setRoot(MinhasosPage);
    // }else{
    //   let texto = 'campo obrigatorio';
    // }
    
  }

  public CancelaJustificativaEPI(){
    this.navCtrl.setRoot(EpiPage);
    //retorna usuario para pagina dos epi aprincipio.
  }
  public validacampo(){
    if(this.justificativa.length > 30 ){
      this.dadosServer();
    }else{
      // 
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops',
    //     text: 'justificativa precisa de 30 caracteres minimo!',
    //     // footer: '<a href>Why do I have this issue?</a>'
    //   })
    //   //possiveltoast
    }
  }
  public dadosServer(){
    console.log(this.ListaEPI);
    console.log(this.objCompleto);
    console.log('----------------------------------------------------');
    console.log(this.objCompleto.id,this.objCompleto.idOrdemServico,this.objCompleto.Status_idStatus,this.ListaEPI,this.justificativa);
    this.enviaDadosEpiProvider.enviarDadosServer(this.objCompleto.id,this.objCompleto.idOrdemServico,this.objCompleto.Status_idStatus,this.ListaEPI,this.justificativa).subscribe(
      (data : any) =>{
        this.navCtrl.setRoot(MinhasosPage);
      },
      (error:any) => {
        console.log(error);
      }
    )
    // let a = {ba:'dsfsfs',ma:'0'}
    // alert(a.ma);

  }
  dismiss() {
    this.viewCtrl.dismiss()
  }

  onUpdateTextArea(event:any) {
    var userComment = (<HTMLInputElement>event.target).value;
    console.log(userComment);
  }
  
}
