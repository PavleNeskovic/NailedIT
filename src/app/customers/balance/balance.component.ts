import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  private _customers: any = [];
  constructor(private _router: Router, private customersService: ApiService) { }

  ngOnInit() {
    this.customersService.get('/1eyqeh').subscribe((data) => {
      this._customers = JSON.parse(data['_body']).sort((a, b) => parseFloat(a.balance) - parseFloat(b.balance))
    });
  }

  isNegativeBalance(balance) {
    if (parseFloat(balance) < 0) {
      return true;
    }
    return false;
  }

}
