import { Component } from '@angular/core';

/**
 * Generated class for the SlideCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slide-card',
  templateUrl: 'slide-card.html'
})
export class SlideCardComponent {

  text: string;

  constructor() {
    console.log('Hello SlideCardComponent Component');
    this.text = 'Hello World';
  }

}
