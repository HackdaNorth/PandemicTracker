import { Component, OnInit } from '@angular/core';
import { SendMessageService } from '../send-message.service'; //import data service

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  message: any; // declare var

  constructor(private sharedService: SendMessageService) {
    // set params
  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
