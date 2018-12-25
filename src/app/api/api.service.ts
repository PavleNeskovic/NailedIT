import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ApiService {

  public static serverEndpoint = 'http://localhost:3000';

  constructor(private _http: Http) { }

  public get(url) {
    console.log(this.generateHeaders());
    return this._http.get(ApiService.serverEndpoint + url, {
      headers: this.generateHeaders()
    });
  }

  public post(url, data) {
    return this._http.post(ApiService.serverEndpoint + url, data, {
      headers: this.generateHeaders()
    });
  }

  public put(url, data) {
    return this._http.put(ApiService.serverEndpoint + url, data, {
      headers: this.generateHeaders()
    });
  }

  public patch(url, data) {
    return this._http.patch(ApiService.serverEndpoint + url, data, {
      headers: this.generateHeaders()
    });
  }

  public delete(url) {
    return this._http.delete(ApiService.serverEndpoint + url, {
      headers: this.generateHeaders()
    });
  }

  private generateHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}
