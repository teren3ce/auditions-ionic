import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-applications',
  templateUrl: 'applications.html',
})
export class ApplicationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openNotifications() {
    this.navCtrl.push(NotificationsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationsPage');
  }

}
