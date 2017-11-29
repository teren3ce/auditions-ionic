import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-list',
  templateUrl: 'message-list.html'
})
export class MessageListComponent {

  @Input() public messages: Array<{
    text: string,
    time: Date,
    from_id: number,
    from: string
  }>;

  @Input() public option: string;

  constructor() {
    // this.messages = [
    //   {
    //     text: `Good day
    //       Just testing this platform out and i think i
    //       love it`,
    //     time: new Date(),
    //     from_id: 120,
    //     from: 'Sandra'
    //   }
    // ]

    // this.option = 'left';
  }

}
