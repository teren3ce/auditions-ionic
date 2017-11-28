import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-audition-details',
  templateUrl: 'audition-details.html',
})
export class AuditionDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
  }

}
