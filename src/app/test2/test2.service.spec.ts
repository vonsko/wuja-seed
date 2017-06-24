import { TestBed, inject } from '@angular/core/testing';

import { Test2Service } from './test2.service';

describe('Test2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test2Service]
    });
  });

  it('should be created', inject([Test2Service], (service: Test2Service) => {
    expect(service).toBeTruthy();
  }));
});
