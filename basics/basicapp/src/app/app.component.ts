import { Component } from '@angular/core';
import {Router,Event,NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicapp';
  showArithmatic:boolean=true;
  showGeometry:boolean=false;
  dynamiccontent:string="home";
  public currentRoute: string ;

  constructor(private router: Router, private location:Location) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event)=>{
      if(event instanceof NavigationEnd){
        this.currentRoute=(<NavigationEnd>event).url;
      }
    });
  }
}
