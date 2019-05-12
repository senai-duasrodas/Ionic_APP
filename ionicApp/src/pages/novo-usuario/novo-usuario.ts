import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Toast } from '../../providers/toast';
import { NovoUsuarioProvider } from '../../providers/novo-usuario/novo-usuario';

/**
 * Generated class for the NovoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-usuario',
  templateUrl: 'novo-usuario.html',
})
export class NovoUsuarioPage {
  userName : string;
  password : string;
  nome: string;
  email: string;
  cracha : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : Toast, private novo : NovoUsuarioProvider ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoUsuarioPage');
  }
  public verificaUsuario(){
    if(this.userName !== "" && this.password !== "" && this.userName !== undefined && this.password !== undefined){
      this.novo.verifica(this.userName).subscribe(
        (data5 : any) => {
          //console.log(data5);
          //this.toast.presentToast("Cadastro realizado com sucesso!", 5000);
          this.novoUsuario()
          //this.navCtrl.setRoot(DashbordPage);
        },
        (error : any) =>{
          this.toast.presentToast("Usuário já existe!", 7000);
          console.log(error)
          console.log("Usuário já existe!");
        }
    );
  }else{
    this.toast.presentToast("Preencha os campos corretamente!", 7000);
  }
}
  public novoUsuario(){
      this.novo.cadastrando(this.userName, this.password, this.cracha, this.email, this.nome).subscribe(
        (data5 : any) => {
          //console.log(data5);
          this.toast.presentToast("Cadastro realizado com sucesso!", 7000);
          //this.navCtrl.setRoot(DashbordPage);
        },
        (error : any) =>{
          console.log(error)
          this.toast.presentToast("Usuario e senha inválidos!", 7000);
          console.log("Que triste deu muito errado!");
        }
    );
  }
  public voltarLogin(){
    this.navCtrl.setRoot(HomePage);
  }
}