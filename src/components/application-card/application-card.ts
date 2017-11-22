import { Component, Input } from '@angular/core';

@Component({
  selector: 'application-card',
  templateUrl: 'application-card.html'
})
export class ApplicationCardComponent {

  @Input() public title: string;
  @Input() public messages: number;
  @Input() public approved: boolean;
  @Input() public image: string;

  constructor() {
  }

}
