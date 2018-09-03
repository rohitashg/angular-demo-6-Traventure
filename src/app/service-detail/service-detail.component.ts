import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import { ShareServicesService } from '../share-services.service';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  public shareservice = [];
  constructor(private router:Router,private _service:ShareServicesService) { } 

  ngOnInit() {
    this.shareservice = this._service.getServices();
  }  
}
