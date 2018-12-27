import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app/about/about.component';
import { HomeComponent } from './home/home.component';
import { ScentsComponent } from './scents/scents.component';

const routes: Routes = [
  { path:'about', component:AboutComponent },
  { path:'', component:HomeComponent },
  { path:'scents', component:ScentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
