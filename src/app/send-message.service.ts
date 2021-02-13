import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  message = new BehaviorSubject('');

  sharedMessage = this.message.asObservable();
  sendMsg(msg) {
    this.message.next(msg);
  }
}
