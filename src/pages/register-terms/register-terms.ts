import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register-terms',
  templateUrl: 'register-terms.html',
})
export class RegisterTermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterTermsPage');
  }

}
