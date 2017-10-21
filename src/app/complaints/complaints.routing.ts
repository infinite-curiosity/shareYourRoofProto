import { Routes, RouterModule }  from '@angular/router';

import { Complaints } from './complaints.component';
import { GoogleMaps } from './googleMaps/googleMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Complaints,
    children: [
      { path: 'googlemaps', component: GoogleMaps }      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
