import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Tenant } from './tenant.component';
import { routing }       from './tenant.routing';
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
    Tenant,
    GoogleMaps
  ]
})
export default class TenantModule {
  
}
