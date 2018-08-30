import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators} from "@angular/forms";
import { FormModel2 } from './../app.component';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
text2="akhil";
@Input() data2: FormModel2;
@Output() data2Change = new EventEmitter();
form2;

@Output() screenChange = new EventEmitter<boolean>();
screen: boolean = false;

branchesgroup = [
  {value: 'C.S'},
  {value: 'EC'},
  {value: 'Mechanical'}
];

  constructor(private fb2: FormBuilder){}

  ngOnInit() {
this.initform2();
  }

  initform2(){
    this.form2 = this.fb2.group({
      college: new FormControl(this.data2.college, [Validators.required]),
      cgpa: new FormControl(this.data2.cgpa, [Validators.required]),
      branch: new FormControl(this.data2.branch, [Validators.required])
    })
  }
  onNavigateBehind(){
    this.data2Change.emit(this.form2.value);
    this.screenChange.emit(this.screen);
  
  }

}
