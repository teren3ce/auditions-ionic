import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WrapperPage } from '../wrapper/wrapper';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  isTalent: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isTalent = this.navParams.get('type');
  }

  skip() {
    this.navCtrl.setRoot(WrapperPage, {
      tab: 0,
      type: this.isTalent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
