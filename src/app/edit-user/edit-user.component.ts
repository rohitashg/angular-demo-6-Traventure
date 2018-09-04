import { Component, OnInit } from '@angular/core';
import { ShareServicesService } from '../share-services.service';
import { Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';
import {User} from '../user.modal';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: string;
  user :User;
  data :User;
  public _user_info = [];  
  constructor(private activeRoute: ActivatedRoute,private router:Router, private shareserice:ShareServicesService) { 
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    
    // this.shareserice.updateUser(this.id).subscribe((user) => {      
    //   this.user = user.data[0];      
    //   console.log(user.data[0])
    // });
  }

  ngOnInit() {    
  }

}
