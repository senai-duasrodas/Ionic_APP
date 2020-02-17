import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment } from 'ionic-angular';
import { MinhasOSProvider } from '../../providers/minhasos';
import { MudaStatusProvider } from '../../providers/mudastatusprovider';
import { Messages } from '../../providers/menssages';
import { DetalheOrdemServicoPage } from "../detalhe-ordem-servico/detalhe-ordem-servico";
import { EpiPage } from "../epi/epi";
import { BuscaEpiProvider } from '../../providers/epis/busca-epi/busca-epi';
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

  public pet: string = 'Aberto';
  public todasOS: any = [];
  public todasEPI: any = [];

  // StatusPausa : string;
  // idOrdemS :number;

  // private mudaStatusProvider:MudaStatusProvider,
  // private messages:Messages
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private minhasOSProvider: MinhasOSProvider,
    public mudaStatusProvider: MudaStatusProvider, private messages: Messages,
    public buscaEpiProvider: BuscaEpiProvider
  ) {
    this.minhaos();


  }
  ngOnInit() {
    console.log(this.segment);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasosPage');
  }
  // selectedFriends(){

  // }
  // selectedEnemies(){

  // }
  public minhaos() {
    let idUsuario = window.localStorage.getItem("idUsuario")
    let id = Number(idUsuario)

    console.log("entrou 1")
    this.listasOS(id);

  }

  public listasOS(id: number) {
    console.log("entrou 2")
    // console.log()
    this.todasOS = [];


    this.minhasOSProvider.PegaOS(id).subscribe(
      (data: any) => {
        console.log(data)
        console.log("entrou 4")
        data.forEach((element: any) => {
          this.todasOS.push(element);
        });

      },
      (error: any) => {
        console.log(error)
      }
    )


  }
  public MostraDetalhes(idOrdemServico: number) {
    let obj = {
      id: idOrdemServico
    }
    this.navCtrl.push(DetalheOrdemServicoPage, obj);
  }

  public doRefresh(event) {
    setTimeout(() => {
      console.log('renovando lista');
      event.complete(this.minhaos());
    }, 2000);
  }
  // public PausaOS(fk_StatusMuda : String, idOS : number){
  //   this.StatusPausa = fk_StatusMuda;
  //   this.idOrdemS = idOS;
  // }
  public capturaIduser() {
    let idUsuario = window.localStorage.getItem("idUsuario")
    let id = Number(idUsuario)
    return id;
  }
  public formatstatus(obj: any) {
    let Status_idStatus = obj.Status_idStatus;
    //id do usuario esta indefinido
    if (Status_idStatus == 1) {
      return Status_idStatus = 1 + 1
    } else if (Status_idStatus == 2) {
      return Status_idStatus = 2 + 2
    } else if (Status_idStatus == 4) {
      return Status_idStatus = 4 - 2
    } else {
      return Status_idStatus = 4

    }
  }

  public montaobj(receive: any) {

    let obj = {
      Status_idStatus: this.formatstatus(receive),
      idOrdemServico: receive.idOrdemServico,
      epis: this.todasEPI,
      id: this.capturaIduser()
      //ver se da para por uma array das epi ou ver se e melhor a epi fazer uma requisiçao para pegAR ELEAS
    }
    console.log("😎")
    console.log(obj);
    return obj;
  }
  public  pegaepi(id:any) {
    // try {
    //   let data= await this.buscaEpiProvider.pegaEPI(this.todasOS.idOrdemServico).toPromise()
    //   console.log(`1.5 -> provider`)
    //   return data
    // } catch (error) {
    //   return [];
    // }
    this.buscaEpiProvider.pegaEPI(id.idOrdemServico).subscribe(
      (data:any) =>{
        this.todasEPI = data;
        console.log(`1 -> pega epi`)
        let a =this.todasEPI;
        console.log(a.length, 'oi');
        this.AlteraStatus(this.todasEPI,id);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  public AlteraStatus(obj: any,osObj:any) {

    
    // this.pegaepi(obj);//tem q ser o primeiro a ser executado antes da validaçao
    console.log(obj);
    console.log(`2 -> pega epi`)
    if (obj == undefined || obj.length == 0 || osObj.Status_idStatus == 2) {
      //|| obj.Status_idStatus == 2
      console.log("oi2");
      this.mudastatusDireto(osObj);
    } else {
      if (osObj.Status_idStatus == 1 || osObj.Status_idStatus == 4) {
        this.navCtrl.setRoot(EpiPage, this.montaobj(osObj));
      }

    }

    // funçao para n abrir a  de detalhamento junto com a funçao mudastatus
    //  number1 = parseInt('21', 10),
    //    let EPIS:any = EPI; // vera se os epi sao undefined ou array vazio
    //    let fk_StatusMudaString:any
    // // let fk_StatusMudaString = parseInt('fk_StatusMuda')
    //   if( fk_StatusMuda == "Aberto"){
    //     fk_StatusMudaString = 1 + 1
    //   }else if(fk_StatusMuda == "Em andamento"){
    //     fk_StatusMudaString = 2 + 1
    //   }else if(fk_StatusMuda == "Pausado"){
    //     fk_StatusMudaString = 4 - 2
    //   }else{
    //     fk_StatusMudaString = 4
    //     idOS = idOS
    // }
    // else{
    //   console.log("Desculpe Algo Quebrou")
    // }

    // let idOrdemServico = idOS;
    // let fk_Status = fk_StatusMudaString;
    // let id = window.localStorage.getItem("idUsuario")
    // let idUsuario = Number(id)
    // this.mudaStatusProvider.MudaStatus(fk_Status,idUsuario,idOrdemServico).subscribe(
    //   (data1 : any) => {
    //     this.messages.loadingShow();
    //     this.minhaos();
    //     return;
    //   },
    //   (error:any) => {
    //     console.log(error)
    //   }
    // )

  }

  public chamaEPI(obj: any) {
    //   let obj={
    //     fk_Status:fk_Status,
    //     idUsuario:idUsuario,
    //     idOrdemServico:idUsuario
    //   }
    //   //colocar validaçao se a os possui epi ou nao caso contrario ele pode passar direto para em andamento ou mandar para pagina de epi

    // this.navCtrl.setRoot(EpiPage,obj);
  }

  //  public chamaEPI2(){
  // let obj={
  //   fk_Status:fk_Status,
  //   idUsuario:idUsuario,
  //   idOrdemServico:idUsuario,
  //   epis:epis
  // }
  //    if(this.epis == undefined or this.epis.lenght == 0){
  //     //this.mudastatusDireto();
  //    }else{
  // this.navCtrl.setRoot(EpiPage,obj);
  // }
  //  }
  public mudastatusDireto(obj: any) {
    // console.table({name: 'Douglas', idade: '22'})
    // console.time
    // debugger;
    // debugger;

    let id = this.capturaIduser();
    let Status_idStatus = this.formatstatus(obj);
    //id do usuario esta indefinido
    // if( Status_idStatus == 1){
    //   Status_idStatus = 1 + 1
    // }else if(Status_idStatus == 2){
    //   Status_idStatus = 2 + 2
    // }else if(Status_idStatus == 4){
    //   Status_idStatus = 4 - 2
    // }else{
    //   Status_idStatus = 4

    // }
    // else{
    //   console.log("Desculpe Algo Quebrou")
    // }
    // debugger;
    // a alteraçao nao sera feita por que eu to mandando o proprio status do obj sem auterar ele mudar
    this.mudaStatusProvider.MudaStatus(Status_idStatus,id, obj.idOrdemServico).subscribe(
      (data1: any) => {
        this.messages.loadingShow();
        this.minhaos();
        return;
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
  public verificaLista() {
    return this.todasOS.some((os: any) => {

      return os.tipoStatus == this.pet;
    });

    //return temOSNoStatus;
  }
}
