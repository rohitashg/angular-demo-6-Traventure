import { Component, OnInit, HostBinding  } from '@angular/core';
import { Observable, of, Subject, asapScheduler, pipe, from, interval, merge, fromEvent } from 'rxjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }

  items: AngularFireList<any[]>;

    constructor(db: AngularFireDatabase) {
      this.items = db.list('/items');
    }

  
}
