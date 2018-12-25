import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: CustomersComponent
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
