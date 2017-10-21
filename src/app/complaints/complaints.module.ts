import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Complaints } from './complaints.component';
import { routing }       from './complaints.routing';
import { MaterialModule } from '@angular/material';
import * as Hammer from 'hammerjs';

import { GoogleMaps } from './googleMaps/googleMaps.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    MaterialModule.forRoot()
  ],
  declarations: [
    Complaints,
    GoogleMaps
  ]
})
export default class ComplaintsModule {
  
}
