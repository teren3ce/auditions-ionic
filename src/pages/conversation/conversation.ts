import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.data.message;
  }
  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

  }

}
