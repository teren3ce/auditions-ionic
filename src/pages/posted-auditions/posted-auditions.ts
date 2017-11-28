import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-posted-auditions',
  templateUrl: 'posted-auditions.html',
})
export class PostedAuditionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
  }

}
