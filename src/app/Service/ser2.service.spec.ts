import { TestBed } from '@angular/core/testing';

import { Ser2Service } from './ser2.service';

describe('Ser2Service', () => {
  let service: Ser2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ser2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
