import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-broadcast-comp1',
  templateUrl: './broadcast-comp1.component.html',
  styleUrls: ['./broadcast-comp1.component.css']
})
export class BroadcastComp1Component implements OnInit {
  msg_recieved:string='';
  constructor(private broadcastService:BroadcastService) { }

  ngOnInit(): void {
    this.broadcastService.msg_observer.subscribe((response)=>{
this.msg_recieved = response;
    });
  }
}
