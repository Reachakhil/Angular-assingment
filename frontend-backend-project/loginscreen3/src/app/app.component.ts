import { Component } from '@angular/core';
import { CrudService} from './crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String;
  age:Number;
  gender:String;
  adress:String;
  createdAt:Date;
constructor(private service : CrudService){}

  title = 'loginscreen3';

  public onAdd(){
    console.log('add button');

    const data ={name :this.name,age:this.age ,gender:this.gender,adress:this.adress};
    this.service.addData(data).subscribe((response:any)=>{

      console.log("Response",response);
      if(response.success){
        alert(response.message);
        this.name=null;
        this.age=null;
        this.gender=null;
        this.adress=null;
      }else{
        alert(response.error);
      }
    });
  }

  public onRead(){
    console.log('Read button');
    

  }
}
