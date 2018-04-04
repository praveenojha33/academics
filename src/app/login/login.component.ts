import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]':''} 
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  error: any; 
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState; // only triggered on sign-in/out (for old behavior use .idToken)
    this.user.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
        this.router.navigateByUrl('/members');
      }).catch(
        (err) => {
          this.error = err;
        });
  }

  loginFb(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (success) => {
        this.router.navigateByUrl('/members');
      }).catch(
        (err) => {
          this.error = err;
        })
  }  

  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
