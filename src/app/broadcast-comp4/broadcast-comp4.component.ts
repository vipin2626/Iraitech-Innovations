import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-broadcast-comp4',
  templateUrl: './broadcast-comp4.component.html',
  styleUrls: ['./broadcast-comp4.component.css']
})
export class BroadcastComp4Component implements OnInit {
  msg_recieved:string='';
  constructor(private broadcastService:BroadcastService) { }

  ngOnInit(): void {
    this.broadcastService.msg_observer.subscribe((response)=>{
this.msg_recieved = response;
    });
  }
}
