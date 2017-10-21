import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Landing } from './landing.component';
import { routing }       from './landing.routing';
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
    Landing,
    GoogleMaps
  ]
})
export default class LandingModule {}
