import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UgComponent } from './ug/ug.component';
import { PhdComponent } from './phd/phd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PgComponent } from './pg/pg.component';
import { CsComponent } from './cs/cs.component';
import { EeComponent } from './ee/ee.component';
import { EcComponent } from './ec/ec.component';
import { CeComponent } from './ce/ce.component';
import { MeComponent } from './me/me.component';
import { ChComponent } from './ch/ch.component';

import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const appRoutes:Routes=[
{path:'home',component:HomeComponent},
{path:'pg',component:PgComponent},
{path:'ug',component:UgComponent},
{path:'phd',component:PhdComponent},
{path:'cs',component:CsComponent},
{path:'ee',component:EeComponent},
{path:'ec',component:EcComponent},
{path:'ce',component:CeComponent},
{path:'me',component:MeComponent},
{path:'ch',component:ChComponent},
{ path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},
{ path: '**', component: PageNotFoundComponent }


]
@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
