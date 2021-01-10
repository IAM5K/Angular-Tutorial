import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmatic',
  templateUrl: './arithmatic.component.html',
  styleUrls: ['./arithmatic.component.css']
})
export class ArithmaticComponent implements OnInit {

  title = 'Arithmatic';
  num1:number;
  num2:number;
  sum:string;
  diff:string;
  res:number;
  dis:boolean;
  dis2:boolean;

  constructor() { }

  add(){
    this.res=this.num2+this.num1;
    if(this.res!==undefined){
      this.sum='Sum is : '+this.res;
    }
    else{
      this.sum=='';
    }
    
  }
  subs(){
    this.res=this.num1-this.num2;
    if(this.res!==undefined){
      this.diff='Difference is : '+this.res;
    }
    else{
      this.diff=='';
    }
    
  }

  ngOnInit(): void {
  }

}
