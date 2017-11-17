import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-wrapper',
  templateUrl: 'wrapper.html',
})
export class WrapperPage {

  @ViewChild(Slides) slides: Slides;
  tabs: Array<{ title: string, index: number }>;
  currentTab: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      {
        title: "Home",
        index: 0,
      }, {
        title: "Auditions and Jobs",
        index: 1,
      }, {
        title: "Messages",
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

  ionViewDidLoad() {
  }

}
