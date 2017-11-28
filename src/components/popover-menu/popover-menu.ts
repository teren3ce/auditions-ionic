import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'popover-menu',
  templateUrl: 'popover-menu.html'
})
export class PopoverMenuComponent {

  menulist: IMenu;
  selected: string;


  constructor(private navParams: NavParams, public viewCtrl: ViewController) {
    console.log(this.navParams.data);
    this.menulist = this.navParams.data.list;
    this.selected = this.navParams.data.selected;
  }

  _selected(item) {
    this.selected = item.text;
    this.viewCtrl.dismiss({
      selected: this.selected,
      icon: item.icon
    });
  }

  ngOnInit() {
  }

}

interface IMenu {
  text: string;
  icon?: string;
}

