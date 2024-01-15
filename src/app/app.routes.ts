import { Routes } from '@angular/router';

import { ListComponent } from './domains/products/pages/list/list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ListComponent
  }
];
