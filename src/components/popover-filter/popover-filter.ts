import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'popover-filter',
  templateUrl: 'popover-filter.html'
})
export class PopoverFilterComponent {

  options: any;

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {
    this.navParams.data.options;
  }

  _selected(item) {
    this.viewCtrl.dismiss({
      icon: item.icon
    });
  }

}
