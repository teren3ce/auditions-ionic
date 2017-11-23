import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterTermsPage } from '../register-terms/register-terms';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-register-form',
  templateUrl: 'register-form.html',
})
export class RegisterFormPage {
  isTalent: boolean;
  talentCategory: Array<string>;
  castingCategory: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isTalent = true;
    this.talentCategory = ['Actors', 'Models', 'Dancer', 'Films and Stage Crew', 'Makeup and Stylist', 'Designer/Photographer'];

    this.castingCategory = ['Arts', 'Entertainment', 'Fashion', 'Movie Production', 'Advertising Agency', 'Others']

    
  }
  goBack() {
    this.navCtrl.pop();
  }
  goTo(option: string) {
    switch (option) {
      case 'terms':
        this.navCtrl.push(RegisterTermsPage);
        break;
      default:
        break;
    }
  }

  register() {
    this.navCtrl.setRoot(WelcomePage, {
      type: this.isTalent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterFormPage');
  }

}
