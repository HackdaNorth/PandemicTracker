import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendMessageService } from '../../send-message.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  message: any;

  constructor(
    private router: Router,
    private sharedService: SendMessageService
  ) {}
  // on ngit
  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  goPage() {
    this.router.navigate(['tabs']).then(
      (nav) => {
        console.log(nav);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sendMsg() {
    this.sharedService.sendMsg(this.message); // send it
    console.log();
  }
}
