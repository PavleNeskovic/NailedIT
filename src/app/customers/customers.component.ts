import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  providers: [ApiService, CustomersService],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public static endpoint = '/1eyqeh';
  private _customers: any = [];
  constructor(private _router: Router, private customersService: ApiService) { }

  ngOnInit() {
    this.customersService.get(CustomersComponent.endpoint).subscribe((data) => {
      this._customers = JSON.parse(data['_body']);
    });
  }

}
