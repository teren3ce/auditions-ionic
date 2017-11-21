import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-card',
  templateUrl: 'select-card.html'
})
export class SelectCardComponent {

  @Input() public image: string;
  @Input() public title: string;
  @Input() public simple: boolean;
  @Input() public selected: boolean;

  constructor() {
  }

}
