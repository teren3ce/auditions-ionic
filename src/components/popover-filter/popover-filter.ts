import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'popover-filter',
  templateUrl: 'popover-filter.html'
})
export class PopoverFilterComponent {

  text: string;

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {

  }

  _selected(item) {
    this.viewCtrl.dismiss({
      icon: item.icon
    });
  }

}
