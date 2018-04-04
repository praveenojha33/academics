import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PgComponent } from './pg/pg.component';
import { UgComponent } from './ug/ug.component';
import { PhdComponent } from './phd/phd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CsComponent } from './cs/cs.component';
import { EeComponent } from './ee/ee.component';
import { EcComponent } from './ec/ec.component';
import { CeComponent } from './ce/ce.component';
import { MeComponent } from './me/me.component';
import { ChComponent } from './ch/ch.component';
import {AngularFireModule} from 'angularfire2';
import { FirebaseConfig } from './firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    NavbarComponent,
    PgComponent,
    UgComponent,
    PhdComponent,
    PageNotFoundComponent,
    HomeComponent,
    CsComponent,
    EeComponent,
    EcComponent,
    CeComponent,
    MeComponent,
    ChComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
