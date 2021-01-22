import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  private msg = new BehaviorSubject<string>('');
  msg_observer = this.msg.asObservable();
  constructor() { }

  sendMsgToAllComponents(msg_recieved:string){
    this.msg.next(msg_recieved);
  }
}
