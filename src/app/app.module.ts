import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ApiService } from './api/api.service';
import { ActivityComponent } from './customers/activity/activity.component';
import { BalanceComponent } from './customers/balance/balance.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    BalanceComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpModule    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
