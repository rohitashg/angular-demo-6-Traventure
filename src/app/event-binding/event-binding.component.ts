import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public greetHere = "";
  public isShow = false;
  public isDisplay = false;
  constructor() { }
  public onClick(){
    if(this.isDisplay == true)
    {
      this.isDisplay = false;
    }else{
      this.isDisplay = true;
    }
    this.isShow = true;    
    this.greetHere = "Oh yeah! you clicked me naughty.";
  }
  ngOnInit() {
  }

}
