import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { BalanceComponent } from '../customers/balance/balance.component';
import { ActivityComponent } from '../customers/activity/activity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'balance',
    component: BalanceComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class RoutingModule { }
