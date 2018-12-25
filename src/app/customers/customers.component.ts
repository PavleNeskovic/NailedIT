import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  providers: [ApiService],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private _customers: any = [];
  public selectedCustomer: Customer;
  category: string; 
  balance: number = 0;
  constructor(private _router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('/customers').subscribe((data) => {
      this.category = 'regular';
      this._customers = JSON.parse(data['_body']).map((obj) => {
        //Sum balances  
        this.balance += parseInt(obj.balance.replace(',',''));
        //calculate discount
        obj.discount = parseInt(obj.balance.replace(',',''))/10;
        return obj;
      });;
    });
  }

  onSelectedCategory(category){
    if(!this._customers) {
      return;
    }
    this.category = category;
    if(category == 'balance') {      
      this._customers.sort((a, b) => parseInt(a.balance.replace(',','')) - parseInt(b.balance.replace(',','')));
    }
    else if(category == 'activity'){
      this._customers.sort((a, b) => a.isActive == true ? 1 : -1);
    } else if(category == 'regular'){
      this._customers.sort((a, b) => a.index - b.index);
    }
  }

  onSelect(customer: Customer) {
    this.selectedCustomer = customer;
  }

  isNegativeBalance(balance) {
    if (parseFloat(balance) < 0) {
      return true;
    }
    return false;
  }

}
