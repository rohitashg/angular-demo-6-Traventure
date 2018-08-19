import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AboutUsComponent } from './about-us/about-us.component'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { InterpolationTestComponent } from './interpolation-test/interpolation-test.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DriectivesComponent } from './driectives/driectives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { TypographyComponent } from './typography/typography.component';
import { QueriesComponent } from './queries/queries.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseconfig = {
  apiKey: "AIzaSyBTI6BgBKRyyrBIseqX0glKXyHMFvYfL_0",
  authDomain: "angular6firebasedemo.firebaseapp.com",
  databaseURL: "https://angular6firebasedemo.firebaseio.com",
  projectId: "angular6firebasedemo",
  storageBucket: "angular6firebasedemo.appspot.com",
  messagingSenderId: "66259121643"
};

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    PageNotFoundComponent,
    ServiceDetailComponent,
    InterpolationTestComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    DriectivesComponent,
    ComponentInteractionComponent,
    TypographyComponent,
    QueriesComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseconfig)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
