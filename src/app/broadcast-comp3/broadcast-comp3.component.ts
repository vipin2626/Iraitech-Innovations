import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-broadcast-comp3',
  templateUrl: './broadcast-comp3.component.html',
  styleUrls: ['./broadcast-comp3.component.css']
})
export class BroadcastComp3Component implements OnInit {
  msg_recieved:string='';
  constructor(private broadcastService:BroadcastService) { }

  ngOnInit(): void {
    this.broadcastService.msg_observer.subscribe((response)=>{
this.msg_recieved = response;
    });
  }
}
