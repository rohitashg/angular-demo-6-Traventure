import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pips',
  templateUrl: './pips.component.html',
  styleUrls: ['./pips.component.css']
})
export class PipsComponent implements OnInit {
  public name="Pips examples";
  public name2="codevolution";
  public message ="learm pips";
  public date = "1999/12/12";
  public person = {
                  "first_name":'jhon',
                  "last_name":"singh"
                };
  constructor() { }

  ngOnInit() {
  }

}
