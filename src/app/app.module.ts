import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ApiService } from './api/api.service';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailsComponent
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
