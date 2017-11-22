import { Component, Input } from '@angular/core';

@Component({
  selector: 'audition-card',
  templateUrl: 'audition-card.html'
})
export class AuditionCardComponent {

  @Input() public title: string;
  @Input() public address: string;
  @Input() public sex: string;
  @Input() public age: string;
  @Input() public image: string;

  constructor() {

  }

}
