import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WrapperPage } from '../wrapper/wrapper';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  skip() {
    this.navCtrl.setRoot(WrapperPage, {
      tab: 0
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
