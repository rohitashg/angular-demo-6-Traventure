import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  public successClass ='list-group-item-success';
  public hasError =true;
  public hasNoError = false;
  public isSpecial = true;
 public orangeColor = 'orange'; 
  public messageClassess = {
    "list-group-item-success":this.hasError,
    "list-group-item-danger":!this.hasError,
    "agile-title":this.isSpecial,
  };
   public styleBinding = {
    color:'blue',
    fontStyle:"italic"
  };

  constructor() { }

  ngOnInit() {
  }

}
