import { TestBed } from '@angular/core/testing';

import { BestbuyService } from './bestbuy.service';

describe('BestbuyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestbuyService = TestBed.get(BestbuyService);
    expect(service).toBeTruthy();
  });
});
