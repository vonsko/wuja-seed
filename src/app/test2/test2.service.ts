import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpclientService } from '../utils/httpclient.service';

@Injectable()
export class Test2Service {
  private mehurl: string = `http://594bd32f93bdd10011b46adb.mockapi.io/api/meh`;

  constructor(private http: HttpclientService) { }

  getSomeMeh () {
    return this.http.get(this.mehurl);
  }
}
