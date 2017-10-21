import { Routes, RouterModule }  from '@angular/router';

import { Tenant } from './tenant.component';
import { GoogleMaps } from './googleMaps/googleMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tenant,
    children: [
      { path: 'googlemaps', component: GoogleMaps }      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
