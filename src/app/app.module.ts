import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {RouterModule,Routes } from '@angular/router'

 

const appRoutes:Routes=
[
  
 
  {path:'home' , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:'team' , component:TeamComponent},
  {path:'services' , component:ServicesComponent},
  {path:'works' , component:WorksComponent},
  {path:'pricing' , component:PricingComponent},
  {path:'contact' , component:ContactComponent},
  {path:'**' , component:HomeComponent},
  {path:'' , component:HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    WorksComponent,
    PricingComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,AngularFontAwesomeModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
