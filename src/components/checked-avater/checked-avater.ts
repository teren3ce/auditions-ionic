import { Component } from '@angular/core';

/**
 * Generated class for the CheckedAvaterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'checked-avater',
  templateUrl: 'checked-avater.html'
})
export class CheckedAvaterComponent {

  text: string;

  constructor() {
    console.log('Hello CheckedAvaterComponent Component');
    this.text = 'Hello World';
  }

}
