import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class HttpclientService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    // headers.append('Authorization', 'Basic ' + btoa('username:password'));
    // headers.append('sometest', 'testheader')
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

}
