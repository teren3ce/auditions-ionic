import { Component, Input } from '@angular/core';

@Component({
  selector: 'application-item',
  templateUrl: 'application-item.html'
})
export class ApplicationItemComponent {
  @Input() public title: string;
  @Input() public messages: number;
  @Input() public user: string;
  @Input() public users: number;
  @Input() public image: string;

  constructor() {
  }

}
