import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth,private router: Router) {
    this.user = afAuth.authState;
    
    this.user.subscribe(auth => {
      if(auth) {
        //console.log(auth);
        this.name = auth;
      }
    });

  }

  logout() {
     this.afAuth.auth.signOut();
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
