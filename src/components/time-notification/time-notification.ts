import { Component } from '@angular/core';

/**
 * Generated class for the TimeNotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'time-notification',
  templateUrl: 'time-notification.html'
})
export class TimeNotificationComponent {

  text: string;

  constructor() {
    console.log('Hello TimeNotificationComponent Component');
    this.text = 'Hello World';
  }

}
