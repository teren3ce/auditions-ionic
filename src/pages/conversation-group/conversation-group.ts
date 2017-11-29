import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-conversation-group',
  templateUrl: 'conversation-group.html',
})
export class ConversationGroupPage {

  title: string;
  messages: Array<{
    option: string,
    list: Array<{ text: string, time: Date, from_id: number }>
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.data.message;

    this.messages = [
      {
        option: 'left',
        list: [{
          text: `Good day
          Just testing this platform out and i think i
          love it`,
          time: new Date(),
          from_id: 120
        }, {
          text: `Good day
        Just testing this platform out and i think i
        love it`,
          time: new Date(),
          from_id: 120
        }]
      },
      {
        option: 'right',
        list: [{
          text: `Sorry, what do you do exactly?
          model or artist?`,
          time: new Date(),
          from_id: 122
        }, {
          text: `Thats good`,
          time: new Date(),
          from_id: 122
        }, {
          text: `Thats good`,
          time: new Date(),
          from_id: 122
        }, {
          text: `Thats good`,
          time: new Date(),
          from_id: 122
        }],
      },
      {
        option: 'left',
        list:
          [{
            text: `Hello Matt, How are you`,
            time: new Date(),
            from_id: 120
          }],
      }
    ]
  }
  goBack() {
    this.navCtrl.pop();
  }


  ionViewDidLoad() {

  }

}
