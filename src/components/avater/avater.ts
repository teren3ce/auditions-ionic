import { Component, Input } from '@angular/core';

@Component({
  selector: 'avater',
  templateUrl: 'avater.html'
})
export class AvaterComponent {
  @Input() public image: string;
  @Input() public type: string;
  @Input() public member: IAvaterMember;
  @Input() public status: IAvaterStatus;

  constructor() {
  }

}

interface IAvaterMember {
  enable: boolean;
  text?: string;
}

interface IAvaterStatus {
  enable: boolean;
  active?: boolean;
}
