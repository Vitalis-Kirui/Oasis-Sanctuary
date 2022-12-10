import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'contact-us', component:ContactUsComponent},
  { path: 'structures', loadChildren: () => import('./Modules/structures/structures.module').then(m => m.StructuresModule) },
  { path: 'gallery', loadChildren: () => import('./Modules/gallery/gallery.module').then(m => m.GalleryModule) },
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
