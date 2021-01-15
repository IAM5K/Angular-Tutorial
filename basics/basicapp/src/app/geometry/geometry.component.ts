import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {
  shapes:any;


  constructor() { }

  ngOnInit(): void {
    this.shapes=[
      {
        name:'Triangle',
        side:'3',
        perimeter:'Sum of All Side '
      },
      {
        name:'Square',
        side:'4',
        perimeter:'4* Side'
      },
      {
        name:'Rectangle',
        side:'4',
        perimeter:'2*(Length+Width)'
      }
    ];
  }

}
