import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { ModalEpiPage } from '../modal-epi/modal-epi';
import { BuscaEpiProvider } from '../../providers/epis/busca-epi/busca-epi';
// import { renderDetachView } from '@angular/core/src/view/';
import { EnviaDadosEpiProvider } from '../../providers/epis/envia-dados-epi/envia-dados-epi';
import { MinhasosPage } from '../minhasos/minhasos';
import { ModalOptions } from 'ionic-angular';

/**
 * Generated class for the EpiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-epi',
  templateUrl: 'epi.html',
})
export class EpiPage {
  public Icon : any;


  // public fk_Status :Number;
  // public idUsuario :Number;
  // public idOrdemServico :Number;

  public objetoos: any;
  public justificativa:string = '';
  public ListaEPI: any = [];
  public ListaEPITrue: any =[];//deprecated
  public ListaEPIFalse: any =[];//deprecated
  public ListaOrientacoesEPI :any=[]; //futuramente sera utilizada para receber as informaçoes de orientaçao 
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modalCtrl: ModalController,
     public buscaEpiProvider:BuscaEpiProvider,
     public enviaDadosEpiProvider:EnviaDadosEpiProvider, public modalCtrl2:ModalController ) {
    // this.fk_Status = this.navParams.data.fk_Status;
    this.objetoos=this.navParams.data;
    // this.teste();
    // this.idUsuario = this.navParams.data.idUsuario;
    // this.idOrdemServico = this.navParams.data.idOrdemServico;
    this.teste2();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EpiPage');
  }
  openModal() {    
    console.log("Rate APP btn clicked ");
    const modalOptions: ModalOptions = {
      cssClass: "ratePageModal"
    };
    const modal = this.modalCtrl.create(ModalEpiPage, {}, modalOptions);
    modal.present();
  }

  // public icon: string = 'md-shirt';
  // public LabelCard : string ="avental";~
  public teste2(){
    console.log("linha-----------------------da vida");
    this.ListaEPI = this.objetoos.epis;
  }
public teste(){
  console.log("linha-----------------------");

  console.log(this.objetoos.epis);
}
  // public buscaEPI(){
  //   this.buscaEpiProvider.pegaEPI(this.objetoos.idOrdemServico).subscribe(
  //     (data:any) =>{
  //       this.ListaEPI = data;
  //     }
  //   )
  // }
  public procuraFalse(){
    console.log('entrou procurando false');
    let a = this.ListaEPI.find((element) => {
      // console.log(element.checked);
      return element.checked == 0;
    });
    // console.log(a);
    return a;
    // const found = this.ListaEPI.find(element => element.epis.checked == 0);
  }
  public VerificaStatusEPI(){
  //   // passara a listra de  objetos para verificar aqueles que nao possuem statos true e colocando em outra lista para 
  //   // passar um obj para o modal para que exiba na tela
  //   this.ListaEPI.forEach(Element => {
  //     if(Element == true){
  //       this.ListaEPITrue.push(Element);
  //     }
  //     else{
  //       this.ListaEPIFalse.push(Element);
  //     }
      
  //   });
  let  confirma = this.procuraFalse();
  
    if(confirma != undefined || confirma == 0 ){
      this.modalVerificacao(this.formatObj());
    }else{
      this.enviarDadosServer(this.formatObj());
    }


  }
  public formatObj(){
    let obj ={
      id:this.objetoos.id,
      idOrdemServico:this.objetoos.idOrdemServico,
      Status_idStatus:this.objetoos.Status_idStatus,
      epis:this.ListaEPI

    }
    return obj;
  }

  // public VerificaStatus(){
  

    // let num:number = 0;
  //   for(num=0;num<=this.ListaEPI.lenght;num++){
  //     if(this.ListaEPI.isChecked[num] == false){
  //       this.modalVerificacao();
  //       return;

  //     }
  //   }
  //   this.enviarDadosServer();
  // }
  public enviarDadosServer(obj:any){
    let idUsuario = window.localStorage.getItem("idUsuario");
    let id =this.objetoos.id;
    let Status_idStatus =this.objetoos.Status_idStatus;
    
                                              // this.ListaEPI.id,this.ListaEPI.idOrdemServico,this.ListaEPI.fk_Status,this.ListaEPI.epis,this.justificativa
    this.enviaDadosEpiProvider.enviarDadosServer(id,this.objetoos.idOrdemServico,Status_idStatus,this.ListaEPI,this.justificativa).subscribe(
      (data:any) =>{
        this.navCtrl.setRoot(MinhasosPage);
      },
      (error:any) =>{
        console.log(error);
      }
    )
    // alert("enviados com sucesso");
    // ------------------------------
    // if( Status_idStatus == 1){
    //   Status_idStatus = 1 + 1
    // }else if(Status_idStatus == 2){
    //   Status_idStatus = 2 + 2
    // }else if(Status_idStatus == 4){
    //   Status_idStatus = 4 - 2
    // }else{
    //   Status_idStatus = 4
      
    // }
    // idUsuario:number,idOrdemServico:number,fk_Status:number,EPIS:any

  }
  // public form = [
  //   { val: 'Avental', isChecked: 0,Icon:'fas fa-tshirt fa-3x' },
  //   { val: 'protetor auricular', isChecked: 0,Icon:'fas fa-headphones fa-3x' },
  //   { val: 'oculos proteçao', isChecked: 0,Icon:'fas fa-glasses fa-3x' },
  //   { val: 'Luvas', isChecked: 0,Icon:'fas fa-hand-paper fa-3x' },
  //   { val: 'Sapatos', isChecked: 0,Icon:'fas fa-shoe-prints fa-3x' },
  //   { val: 'Capacete', isChecked: 0,Icon:'fas fa-hard-hat fa-3x' }
  // ];
  
  public formInformacoes = [
    { val: 'Seguir a norma 1524 - ATR - Autorizaçao de Trabalhos de Risco', id: 1 },
    { val: 'Seguir a norma 1518 - Espaço confinado', id: 2 },
    { val: 'Seguir a norma 1520 - Trabalho de corte e solda', id: 3 },
    { val: 'Seguir a norma 1528 - Demolição', id: 4 },

  ];
  
//  public EnviaModal(ListaEPI:any){
//    let obj =  {
//     ListaEPI :ListaEPI
//    }

//  }
 public auteraChekbox(entry){
    // entry.isChecked = true;
  if(entry.checked == 0){
      entry.checked = 1;
      
  }else{
    entry.checked = 0;
  }
  console.log(entry);

 }
 public modalVerificacao(obj:any) {
  // debugger;
  //  let teste1= this.objetoos.Status_idStatus;
  //  let teste2= obj.Status_idStatus;
   
  //  let obj1 = {
  //   fk_Status:this.objetoos.Status_idStatus,
  //   idOrdemServico:this.objetoos.idOrdemServico,
  //   form:obj.form
  //  }

  const modal = this.modalCtrl.create(ModalEpiPage,obj);
  modal.present();
}

public testes(){
  const modal = this.modalCtrl.create(ModalEpiPage);
  modal.present();
}



// ------------------------------------------------------------------------------

}
