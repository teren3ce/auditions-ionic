import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-conversation-group',
  templateUrl: 'conversation-group.html',
})
export class ConversationGroupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    
  }

}
