import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-wrapper',
  templateUrl: 'wrapper.html',
})
export class WrapperPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(Slides) cardslides: Slides;

  tabs: Array<{ title: string, class: string, index: number }>;
  currentTab: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      {
        title: "Home",
        class: 'home',
        index: 0,
      }, {
        title: "Auditions and Jobs",
        class: 'audition',
        index: 1,
      }, {
        title: "Messages",
        class: 'message',
        index: 2,
      }]
    this.currentTab = 0;
  }

  slideChanged() {
    this.currentTab = this.slides.getActiveIndex();
  }

  segmentChanged(evt) {
    this.slides.slideTo(this.currentTab);
  }
  openLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
  }
  ngAfterViewInit() {
  }
}
