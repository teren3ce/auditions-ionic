import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-wrapper',
  templateUrl: 'wrapper.html',
})
export class WrapperPage {

  @ViewChild('tabslide') tabslide: Slides;
  @ViewChild('cardslide') cardslide: Slides;

  tabs: Array<{ title: string, class: string, index: number }>;
  applications: Array<string>;
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

    this.applications = [
      'Sample title for auditions',
      'Sample title for auditions 2',
      'Sample title for auditions 3',
      'Sample title for auditions 4',
      'Sample title for auditions 5'
    ]
  }

  slideChanged() {
    this.currentTab = this.tabslide.getActiveIndex();
  }

  segmentChanged() {
    this.tabslide.slideTo(this.currentTab);
  }
  openLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
  homeSlideChange(evt: Slides) {
  }
  ionViewDidLoad() {
  }
  ngAfterViewInit() {
    this.cardslide.freeMode = true;
  }
}
