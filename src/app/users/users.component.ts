import { Component, OnInit } from '@angular/core';
import { ShareServicesService } from '../share-services.service';
import { RouterLink } from '@angular/router';
import { Routes, RouterModule,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userlist = [];

  constructor(public router:Router,private shareservice:ShareServicesService) { 

  }

  ngOnInit() {
    this.shareservice.getUserList()
        .subscribe(data => this.userlist = data,
                   error => this.userlist = error);
                   console.log(this.userlist);
  }
  public view_user(evt,user){
    this.router.navigate(['/user-detail/',user.id]);
  }

}
