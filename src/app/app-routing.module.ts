import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { HomeComponent} from './home/home.component';
import { ServicesComponent} from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';

 
const routes: Routes = [
  { path:'about.html',component:AboutUsComponent},
  { path:'home.html',component:HomeComponent},
  { path:'services.html',component:ServicesComponent},
  { path:'gallery.html',component:GalleryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = ['AboutUsComponent'];