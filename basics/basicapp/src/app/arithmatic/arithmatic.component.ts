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
  op:string;
  result:string;
  sum:string;
  diff:string;
  product:string;
  res:number;
  dis:boolean;
  dis2:boolean;

  constructor() { 


  }

  add(){
    this.res=this.num2+this.num1;
    if(this.res!==undefined){
      this.sum='Sum is : '+this.res;
      this.diff='';
      this.product='';
    }
    else{
      this.sum=null;
    }
  }
  subs(){
    this.res=this.num1-this.num2;
    if(this.res!==undefined){
      this.diff='Difference is : '+this.res;
      this.sum=null;
      this.product='';
    }
    else{
      this.diff='';
    }
  }
  multiply(){
    this.res=this.num1*this.num2;
    if(this.res!==undefined){
      this.product='Product is : '+this.res;
      this.sum=null;
      this.diff='';
    }
    else{
      this.product='Invalid';
      this.diff='';
      this.sum=null;
    }
  }
  
  arith(){
    if(this.num1!==null && this.num2!==null){
      if(this.op=='Add'){
        this.add();
      }
      else if(this.op=='Substract'){
        this.subs();
      }
      else if(this.op=='Multiply'){
        this.multiply();
      }
      else{
        this.result='Invalid Operation on '+this.num1+' && '+this.num2;
      }
    }
  }

  ngOnInit(): void {
  }

}
