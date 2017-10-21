import { Routes, RouterModule } from '@angular/router';

/*export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }
];*/

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'myAccount',
    loadChildren: () => System.import('./tenant/tenant.module')
  },
  {
    path: 'payRent',
    loadChildren: () => System.import('./payRent/payRent.module')
  },
  {
    path: 'complaints',
    loadChildren: () => System.import('./complaints/complaints.module')
  },
  {
    path: 'receipts',
    loadChildren: () => System.import('./receipts/receipts.module')
  },
 /*  {
    path: 'exitRequest',
    loadChildren: () => System.import('./exitRequest/exitRequest.module')
  },
 {
    path: 'knowTheRules',
    loadChildren: () => System.import('./payRent/knowTheRules.module')
  },
  {
    path: 'feedback',
    loadChildren: () => System.import('./payRent/feedback.module')
  },
  {
    path: 'updateProfile',
    loadChildren: () => System.import('./payRent/updateProfile.module')
  },*/
  {
    path: 'home',
    loadChildren: () => System.import('./landing/landing.module')
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },  
];

console.info("702",JSON.stringify(routes));

export const routing = RouterModule.forRoot(routes, { useHash: true });
