import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-broadcast-comp2',
  templateUrl: './broadcast-comp2.component.html',
  styleUrls: ['./broadcast-comp2.component.css']
})
export class BroadcastComp2Component implements OnInit {
  msg_recieved:string='';
  constructor(private broadcastService:BroadcastService) { }

  ngOnInit(): void {
    this.broadcastService.msg_observer.subscribe((response)=>{
this.msg_recieved = response;
    });
  }
}
