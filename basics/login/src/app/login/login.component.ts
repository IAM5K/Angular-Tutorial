import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'BasicApp';
  num1:number;
  num2:number;
  sum:string;
  diff:string;
  res:number;
  dis:boolean;
  dis2:boolean

  constructor() { }

  login(){
    this.res=this.num2+this.num1;
  }

  ngOnInit(): void {
  }

}
