import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import { ShareServicesService } from '../share-services.service';

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
  public shareservice = [];
  constructor(private router:Router,private _service:ShareServicesService) { }  

  ngOnInit() {
    this.shareservice = this._service.getServices();
    console.log(this.shareservice);
  }

  onClick(services){    
    this.router.navigate(['/service',services.id]);
  }

}
