import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomersService {

  public static endpoint = '/1eyqeh';
  private _customers: any = [];

  constructor(private _api: ApiService) {}

}
