import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaOrdensPage } from '../consulta-ordens/consulta-ordens';
import { CadastroOrdemServicoPage } from '../cadastro-ordem-servico/cadastro-ordem-servico';
import { SolicitaProdutoPage } from '../solicita-produto/solicita-produto';
import { ApontamentoPage } from '../apontamento/apontamento';
import { HomePage } from '../home/home';
import { AutenticandoProvider } from '../../providers/autenticando';
import chartJs from 'chart.js';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  usuario : string;
  token : string;

  @ViewChild('barCanvas')barCanvas;
  @ViewChild('lineCanvas')lineCanvas;
  @ViewChild('pieCanvas')pieCanvas;
  @ViewChild('doughnutCanvas')doughnutCanvas;

  barChart: any;
  lineChart: any;
  pieChart: any;
  doughnutChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public autenticandoProvider: AutenticandoProvider) {
    this.autenticaUsuario()
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.barChart = this.getBarChart();
      this.lineChart = this.getLineChart();
    },150)}
  getChart(context, chartType, data, options?){
    return new chartJs(context,{
      data,
      options,
      type: chartType
    })
  }
  getBarChart(){
    const data = {
      labels: ['Condimentos','Essência','Flocos','Spray'],
      datasets: [{
        label: 'Setores com mais ordens abertas',
        data: [12,23,15,82,5],
        backgroundColor:[
          'rgb(255,0,0,0.5)',
          'rgb(20,0,255,0.5)',
          'rgb(255,230,0,0.5)',
          'rgb(0,255,10,0.5)',
          'rgb(60,0,70,0.5)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          beginAtZero: true
        }]
      }
    }
    return this.getChart(this.barCanvas.nativeElement,'bar',data,options);
  }

  getLineChart(){
    const data = {
      labels: ['1° Trimestre','2° Trimestre','3° Trimestre','4° Trimestre'],
      datasets: [{
        label: "Abertas",
        fill: false,
        lineTension: 0.1,
        backgrounColor: 'rgb(0,178,255)',
        borderColor: 'rgb(231,205,35)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius:1,
        pointHitRadius: 10,
        data:[20,15,98,4],
        scanGaps: false,
      },{
        label: 'Encerradas',
        fill: false,
        lineTension: 0.1,
        backgrounColor: 'rgb(117,0,49)',
        borderColor: 'rgb(51,50,46)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius:1,
        pointHitRadius: 10,
        data:[29,135,13,70],
        scanGaps: false,
      }
    ]
    }
    return this.getChart(this.lineCanvas.nativeElement,'line',data);
  }

  public consultOrdem(){
    this.navCtrl.push(ConsultaOrdensPage);
  }
  public cadastroOrdem(){
    this.navCtrl.push(CadastroOrdemServicoPage);
  }
  public solicitarPecas(){
    this.navCtrl.push(SolicitaProdutoPage);
  }
  public apontamento(){
    this.navCtrl.push(ApontamentoPage);
  }
  public refresh(){
    let obj = {
      saida : 1
    }
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('token');
    this.navCtrl.setRoot(HomePage,obj);
  }
  public autenticaUsuario(){
    this.usuario = window.localStorage.getItem("idUsuario")
    let id = Number(this.usuario)
    this.token = window.localStorage.getItem("token")
    this.autenticandoProvider.verificaUsuario(id, this.token).subscribe(
      (data : any) => {
        console.log("Autenticação Realizada com Sucesso!!!!!")
      },
      (error : any) =>{
        this.navCtrl.setRoot(HomePage);
      }
    );

  }

}
