import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  screen:boolean = true;

formData: FormModel = new FormModel();
formData2: FormModel2 = new FormModel2();

changeScreen(e){
  this.screen = !e;
  console.log(this.formData )
}
}
export class FormModel {
  name: string;
  email: any;
  phone: string;
  gender: string;
  location1:string;
  location2:string;
}

export class FormModel2{
  college: string;
  cgpa: string;
  branch: string;
}

