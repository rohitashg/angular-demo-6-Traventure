import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
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
    ComponentInteractionComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
