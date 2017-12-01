import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-posted-auditions',
  templateUrl: 'posted-auditions.html',
})
export class PostedAuditionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openNotifications() {
    this.navCtrl.push(NotificationsPage);
  }

  ionViewDidLoad() {
  }

}
