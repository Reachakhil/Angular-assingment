import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  inp="";
  result1="";
  cur="";
  flag=false;
  status=true;

  onclick(value:any){
    if(this.flag){
      this.inp="";
      this.flag=false;
    }
   if(value == 'C')
   {
     this.inp="";
   }
   else if(value == '='){
     this.flag=true;
    this.result1=eval(this.inp)
    this.inp=this.result1;
   }
   else{
     if(this.inp == '0'){
       this.inp=this.inp + value;
     }
    else{
    this.inp= this.inp + value;
  }
}
  }

  result(){
  
  }
  clear(){
    
    this.inp="";
  }

  constructor() { 
    
  }

  ngOnInit() {
  }

}
