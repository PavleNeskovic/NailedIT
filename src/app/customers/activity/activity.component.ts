import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  private _customers: any = [];
  constructor(private _router: Router, private customersService: ApiService) { }

  ngOnInit() {
    this.customersService.get('/1eyqeh').subscribe((data) => {
      this._customers = JSON.parse(data['_body']).sort((a, b) => a.isActive == true ? 1 : -1).map((obj) => {
        obj.discount = parseInt(obj.balance.replace(',',''))/10;
        return obj;
    });;
    });
  }

}
