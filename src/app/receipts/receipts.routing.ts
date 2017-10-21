import { Routes, RouterModule }  from '@angular/router';

import { Receipts } from './receipts.component';
import { GoogleMaps } from './googleMaps/googleMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Receipts,
    children: [
      { path: 'googlemaps', component: GoogleMaps }      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
