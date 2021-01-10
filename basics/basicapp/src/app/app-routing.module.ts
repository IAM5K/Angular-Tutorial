import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArithmaticComponent } from './arithmatic/arithmatic.component';

const routes: Routes = [
  {path:'',component:ArithmaticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
