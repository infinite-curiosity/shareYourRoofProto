import { Routes, RouterModule }  from '@angular/router';

import { Landing } from './landing.component';
import { GoogleMaps } from './googleMaps/googleMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Landing,
    children: [
      { path: 'googlemaps', component: GoogleMaps }      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
