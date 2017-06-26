import { Component, OnInit } from '@angular/core';
import { Test2Service } from './test2.service';
import { User } from '../models/user';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  some: User[];

  constructor(private service: Test2Service) { }

  ngOnInit() {
    this.getInit();
  }
  getInit () {
    this.service.getSomeMeh().subscribe(res => {
      this.some = res.json();
      console.log('users', this.some)
    })
  }

  getSome() {
    this.service.getSomeTest().subscribe(res => {
      console.log('meh', res);
    })
  }
}
