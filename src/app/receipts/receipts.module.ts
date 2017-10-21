import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Receipts } from './receipts.component';
import { routing }       from './receipts.routing';
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
    Receipts,
    GoogleMaps
  ]
})
export default class ReceiptsModule {
  
}
