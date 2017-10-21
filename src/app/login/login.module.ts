import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import * as Hammer from 'hammerjs';

import { Login } from './login.component';
import { routing }       from './login.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    MaterialModule.forRoot()
  ],
  declarations: [
    Login
  ]
})
export default class LoginModule {}
