import { Routes, RouterModule }  from '@angular/router';

import { PayRent } from './payRent.component';
import { GoogleMaps } from './googleMaps/googleMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: PayRent,
    children: [
      { path: 'googlemaps', component: GoogleMaps }      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
