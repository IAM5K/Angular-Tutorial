import { stringify } from '@angular/compiler/src/util';
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
  result2:string;
  res:number;
  dis:boolean;

  constructor() {

  }

  clearall(){
    this.result=null;
    this.result2=null;
    this.res=null;
    this.dis=null;
  }

  add(){
    this.res=this.num2+this.num1;
    if(this.res!==undefined){
      this.result='Sum is : '+this.res;
    }
    else{
      this.result='Addition Failed';
    }
  }
  subs(){
    this.res=this.num1-this.num2;
    if(this.res!==undefined){
      this.result='Difference is : '+this.res;
    }
    else{
      this.result='Substraction Failed';
    }
  }
  multiply(){
    this.res=this.num1*this.num2;
    if(this.res!==undefined){
      this.result='Product is : '+this.res;      
    }
    else{
      this.result='Invalid Multiplication';
    }
  }
  divide(){
    let r:number;
    let d:number;
    let div:any;
    let val:any;
    d=this.num1/this.num2;
    r=d%1;
    val = d.toFixed(2);
    div = val-(val%1);
    r=this.num1% this.num2;
    if(this.res!==undefined){
      this.result=`${`Value for ${this.num1}/${this.num2} is : ` + val}
        Dividend is : ${div}
        Remainder is : ${r}`;      
    }
    else{
      this.result='Invalid Division';
    }
  }
  
  arith(){
    if(this.num1!==null && this.num2!==null){
      this.clearall();
      if(this.op=='Add'){
        this.add();
      }
      else if(this.op=='Substract'){
        this.subs();
      }
      else if(this.op=='Multiply'){
        this.multiply();
      }
      else if(this.op=='Divide'){
        this.divide();
      }
      else{
        this.result='Invalid Operation on '+this.num1+' && '+this.num2;
      }
      this.result2=this.result;
      this.result='';
    }
  }

  ngOnInit(): void {
    
  }

}
