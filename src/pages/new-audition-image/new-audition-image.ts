import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-new-audition-image',
  templateUrl: 'new-audition-image.html',
})
export class NewAuditionImagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
  }

}
