import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment } from 'ionic-angular';
import { MinhasOSProvider } from '../../providers/minhasos';
import { MudaStatusProvider } from '../../providers/mudastatusprovider';
import { Messages } from '../../providers/menssages';
import { DetalheOrdemServicoPage } from "../detalhe-ordem-servico/detalhe-ordem-servico";
/**
 * Generated class for the MinhasosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minhasos',
  templateUrl: 'minhasos.html',
})
export class MinhasosPage {

  @ViewChild(Segment) segment: Segment; 

  public pet : string = 'OS Aberta';
  public listaOSAberta : any = [];
  public listaOSAndamento : any = [];
  public listaOSPausadas : any = [];

  // StatusPausa : string;
  // idOrdemS :number;


  constructor(public navCtrl: NavController,
     public navParams: NavParams, private minhasOSProvider:MinhasOSProvider,
     private mudaStatusProvider:MudaStatusProvider,
     private messages:Messages ) {
    this.minhaos();
    
  }
  ngOnInit(){
    console.log(this.segment);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasosPage');
  }
  // selectedFriends(){
    
  // }
  // selectedEnemies(){

  // }
  public minhaos(){
    let idUsuario = window.localStorage.getItem("idUsuario")
    let id = Number(idUsuario)


    this.listasOS(id);
    
  }
  
  public listasOS(id: number){
    // console.log("entro r")
    // console.log()
    this.listaOSAberta = [];
    this.listaOSAndamento = [];
    this.listaOSPausadas = [];

    this.minhasOSProvider.PegaOS(id).subscribe(
      (data:any) => {
        console.log(data)
        data.forEach((element: any )=> {

          if (element.Status_idStatus == 1){
            element.Status_idStatus = "Aberto"
            // this.listaOSAberta = element
            this.listaOSAberta.push(element)
            console.log(this.listaOSAberta)
           
          }else if(element.Status_idStatus == 2){
            element.Status_idStatus = "Em andamento"
            this.listaOSAndamento.push(element)
            console.log(this.listaOSAndamento)
            
          }else if(element.Status_idStatus == 4){
            element.Status_idStatus = "Pausado"
            this.listaOSPausadas.push(element)
            console.log(this.listaOSPausadas)
          }
          
        });
        
      },
      (error:any) =>{
        console.log(error)
      }
    )


  }
  public MostraDetalhes(idOrdemServico:number){
    let obj = {
      id:idOrdemServico
    }
    this.navCtrl.push(DetalheOrdemServicoPage,obj);
  }

  public doRefresh(event) {
    // console.log("--------------------------------------------------------------")
    // console.log(event);
    // console.log("--------------------------------------------------------------")
    setTimeout(() => {
      console.log('renovando lista');
      event.complete(this.minhaos());
    }, 2000);
  }
  // public PausaOS(fk_StatusMuda : String, idOS : number){
  //   this.StatusPausa = fk_StatusMuda;
  //   this.idOrdemS = idOS;
  // }
            
 public AlteraStatus(fk_StatusMuda : String, idOS : number){
   // funçao para n abrir a  de detalhamento junto com a funçao mudastatus
  //  number1 = parseInt('21', 10),
     let fk_StatusMudaString:any
  // let fk_StatusMudaString = parseInt('fk_StatusMuda')
    if( fk_StatusMuda == "Aberto"){
      fk_StatusMudaString = 1 + 1
    }else if(fk_StatusMuda == "Em andamento"){
      fk_StatusMudaString = 2 + 1
    }else if(fk_StatusMuda == "Pausado"){
      fk_StatusMudaString = 4 - 2
    }else{
      fk_StatusMudaString = 4
      idOS = idOS
    }
    // else{
    //   console.log("Desculpe Algo Quebrou")
    // }
    
    let idOrdemServico = idOS;
    let fk_Status = fk_StatusMudaString;
    let id = window.localStorage.getItem("idUsuario")
    let idUsuario = Number(id)
    this.mudaStatusProvider.MudaStatus(fk_Status,idUsuario,idOrdemServico).subscribe(
      (data1 : any) => {
        this.messages.loadingShow();
        this.minhaos();
        return;
      },
      (error:any) => {
        console.log(error)
      }
    )
 
  }

 
}
