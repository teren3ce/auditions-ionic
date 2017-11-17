import { Component } from '@angular/core';

/**
 * Generated class for the AuditionCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'audition-card',
  templateUrl: 'audition-card.html'
})
export class AuditionCardComponent {

  text: string;

  constructor() {
    console.log('Hello AuditionCardComponent Component');
    this.text = 'Hello World';
  }

}
