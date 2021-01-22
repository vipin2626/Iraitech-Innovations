import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-missing-number',
  templateUrl: './find-missing-number.component.html',
  styleUrls: ['./find-missing-number.component.css']
})
export class FindMissingNumberComponent implements OnInit {
  value_at_index : number =0;
  constructor() { }

  ngOnInit(): void {
  }
 
  getTheNumber(index:string){
    var index_of_number = +index;
    var i=0;
    var value=0;
    for(i=0;i<=index_of_number;i++){
      value = (i+1)*(i+1);
       if((i+1)%2 === 0){
         value = value-1;
       }else{
         value = value+1;
       }
    }
    this.value_at_index = value;
  }
}
