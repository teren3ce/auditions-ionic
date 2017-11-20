import { Component } from '@angular/core';

@Component({
  selector: 'select-card',
  templateUrl: 'select-card.html'
})
export class SelectCardComponent {

  text: string;

  constructor() {
    this.text = 'Select Card';
  }

}
