import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driectives',
  templateUrl: './driectives.component.html',
  styleUrls: ['./driectives.component.css']
})
export class DriectivesComponent implements OnInit {
  public isDisplay = false;
  public color = 'redss';
  public colors = ['red','green','blue'];
  constructor() { }

  ngOnInit() {
  }

}
