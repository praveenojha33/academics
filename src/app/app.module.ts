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
    ChComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
