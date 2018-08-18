import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public serviceArr = [
    {id:1,"name":"rohit"},
    {id:2,"name":"sohit"},
    {id:3,"name":"kohit"},
    {id:4,"name":"mohit"},
    {id:5,"name":"pohit"},
  ];
  constructor(private router:Router) { }  

  ngOnInit() {
  }

  onClick(services){
    console.log(services.id);
    this.router.navigate(['/service',services.id]);
  }

}
