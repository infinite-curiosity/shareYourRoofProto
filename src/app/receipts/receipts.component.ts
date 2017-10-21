import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { MaterialModule } from '@angular/material';
import * as Hammer from 'hammerjs';


@Component({
  selector: 'receipts',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./receipts.scss')],
  template: require('./receipts.html'),
})
export class Receipts {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  public branches = [
    {
        name : "Jainagar"
    },
    {
        name : "Indranagar"
    },
    {
        name : "Gandhinagar"
    },
    {
        name : "Brindhavan Garden"
    },
    {
        name : "Chinnaswamy Lane"
    }
  ];

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
