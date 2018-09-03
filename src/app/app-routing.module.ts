import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { HomeComponent} from './home/home.component';
import { ServicesComponent} from './services/services.component';
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
import { PipsComponent } from './pips/pips.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component'
 
const routes: Routes = [
  { path:'',redirectTo:'home.html',pathMatch:'full'},
  { path:'about.html',component:AboutUsComponent},
  { path:'typo.html',component:TypographyComponent},
  { path:'interpolation',component:InterpolationTestComponent},
  { path:'class-binding',component:ClassBindingComponent},
  { path:'component-interaction',component:ComponentInteractionComponent},
  { path:'two-way-binding',component:TwoWayBindingComponent},
  { path:'directive-examples',component:DriectivesComponent},
  { path:'template-reference-variables',component:TemplateReferenceVariablesComponent},
  { path:'event-binding',component:EventBindingComponent},
  { path:'property-binding',component:PropertyBindingComponent},
  { path:'service/:id',component:ServiceDetailComponent},
  { path:'home.html',component:HomeComponent},
  { path:'queries',component:HomeComponent},
  { path:'services.html',component:ServicesComponent},
  { path:'gallery.html',component:GalleryComponent},
  { path:'pips',component:PipsComponent},
  { path:'dependency-injection',component:DependencyInjectionComponent},
  { path:'users',component:UsersComponent},
  { path:'user-detail/:id',component:UserDetailComponent},
  { path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = ['AboutUsComponent'];