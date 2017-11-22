import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.navCtrl.setRoot(WelcomePage, {
      type: 0
    });
  }

  goTo(option: string) {
    switch (option) {
      case 'register':
        this.navCtrl.push(RegisterPage);
        break;
      case 'forgot':
        this.navCtrl.push(ForgotPasswordPage);
        break;
      default:
        break;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
