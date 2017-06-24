import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

import { HttpclientService } from './utils/httpclient.service';
import { Test2Service } from './test2/test2.service';

const Routing = RouterModule.forRoot([
  {
    path: 'sometest',
    component: Test1Component
  },
  {
    path: 'someother',
    component: Test2Component
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Routing
  ],
  providers: [
    Test2Service,
    HttpclientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
