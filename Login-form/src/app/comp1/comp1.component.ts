import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormModel } from './../app.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms'

export interface Year{
  value:string;
  viewvalue:String;
  }
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})

export class Comp1Component implements OnInit {
text1="akki";
@Input() data: FormModel;
@Output() dataChange = new EventEmitter();
form;
@Output() screenChange = new EventEmitter<boolean>();
screen: boolean = true;

constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.initForm();
    
  }

  initForm() {
    this.form = this.fb.group({
      name: new FormControl(this.data.name, [Validators.required]),
      email: new FormControl(this.data.email, [Validators.required]),
      phone: new FormControl(this.data.phone, [Validators.required]),
      gender:  new FormControl(this.data.gender, [Validators.required]),
      location1: new FormControl(this.data.location1,[Validators.required]),
      location2: new FormControl(this.data.location2,[Validators.required])
    })

    console.log(this.form)
  }

  onNavigateForward(){
    this.dataChange.emit(this.form.value);
    this.screenChange.emit(this.screen);
  }


}
