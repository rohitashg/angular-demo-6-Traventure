import { Component, OnInit } from '@angular/core';
import { ShareServicesService } from '../share-services.service';
import { Routes, RouterModule,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {User} from '../user.modal';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: string;
  user :User;
  data :User;
  public _user_info = [];  
  constructor(private activeRoute: ActivatedRoute,private router:Router, private shareserice:ShareServicesService) { 
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    
    this.shareserice.viewUser(this.id).subscribe((user) => {      
      this.user = user.data[0];      
      console.log(user.data[0])
    });
  }

  ngOnInit() {    
  }

}
