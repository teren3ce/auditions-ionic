import { Component } from '@angular/core';

/**
 * Generated class for the ApplicationCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'application-card',
  templateUrl: 'application-card.html'
})
export class ApplicationCardComponent {

  text: string;

  constructor() {
    console.log('Hello ApplicationCardComponent Component');
    this.text = 'Hello World';
  }

}
