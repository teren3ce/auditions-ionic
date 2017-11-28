import { Component, Input, Output, EventEmitter } from '@angular/core';
import { } from '@angular/core/src/event_emitter';

@Component({
  selector: 'popover-menu',
  templateUrl: 'popover-menu.html'
})
export class PopoverMenuComponent {

  @Input() public menulist: IMenu;

  @Output() selected: EventEmitter<string>;

  constructor() {
  }

  _selected(item) {
    this.selected.emit(item);
  }

}

interface IMenu {
  text: string;
  icon?: string;
}

