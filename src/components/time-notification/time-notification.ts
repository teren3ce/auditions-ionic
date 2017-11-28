import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-notification',
  templateUrl: 'time-notification.html'
})
export class TimeNotificationComponent {

  @Input() public time: Date;
  @Input() public active: boolean;

  constructor() {
  }

}
