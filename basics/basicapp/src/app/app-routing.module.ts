import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArithmaticComponent } from './arithmatic/arithmatic.component';
import { GeometryComponent } from './geometry/geometry.component';
import { HomeComponent } from './home/home.component';

const root = { path: '', component:AppComponent };
const home = { path: 'home', component:HomeComponent  }
const arithmatic = { path: 'arithmatic', component: ArithmaticComponent };
const geometry = { path: 'geometry', component: GeometryComponent };
const routes: Routes = [
  root,home,arithmatic,geometry
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
