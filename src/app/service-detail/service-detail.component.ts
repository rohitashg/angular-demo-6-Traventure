import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  constructor(private router:Router) { } 

  ngOnInit() {
  }  
}
