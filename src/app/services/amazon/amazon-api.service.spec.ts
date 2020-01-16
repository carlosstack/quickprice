import { TestBed } from '@angular/core/testing';

import { AmazonApiService } from './amazon-api.service';

describe('AmazonApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmazonApiService = TestBed.get(AmazonApiService);
    expect(service).toBeTruthy();
  });
});
