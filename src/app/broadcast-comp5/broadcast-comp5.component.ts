import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-broadcast-comp5',
  templateUrl: './broadcast-comp5.component.html',
  styleUrls: ['./broadcast-comp5.component.css']
})
export class BroadcastComp5Component implements OnInit {

  constructor(private brodcastService:BroadcastService) { }

  ngOnInit(): void {
  }
sendMsg(msg:string){
  this.brodcastService.sendMsgToAllComponents(msg);
}
}
