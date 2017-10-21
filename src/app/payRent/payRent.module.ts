import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PayRent } from './payRent.component';
import { routing }       from './payRent.routing';
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
    PayRent,
    GoogleMaps
  ]
})
export default class PayRentModule {
  
}
