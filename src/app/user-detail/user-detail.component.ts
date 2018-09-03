import { Component, OnInit } from '@angular/core';
import { ShareServicesService } from '../share-services.service';
import { Routes, RouterModule,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: number;
  public _user_info = [];  
  constructor(private activeRoute: ActivatedRoute,private router:Router, private shareserice:ShareServicesService) { 
    this.shareserice.viewUser(this.id)
        .subscribe(data => this._user_info = data,
                   error => this._user_info = error);
                   console.log(this._user_info);

    console.log(this._user_info);
  }

  ngOnInit() {    
  }

}
