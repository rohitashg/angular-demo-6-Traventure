import { Component, OnInit } from '@angular/core';
import { ShareServicesService } from '../share-services.service';
import { RouterLink } from '@angular/router';
import { Routes, RouterModule,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  public shareservive = [];
  public employeeto = [];
  public errorMsg;
  public isError = false;  

  constructor(public router:Router,private _serve:ShareServicesService,private http:HttpClient) { 
    this.shareservive = this._serve.getServices();      
  }

  ngOnInit() {
    this._serve.getEmployeesList()
        .subscribe(data => this.employeeto = data,
                   error => this.errorMsg = error);      

  }
  onClick(services){    
    this.router.navigate(['/service',services.id]);
  }

}
