import { TestBed } from '@angular/core/testing';

import { CustomerServiceService } from './customer-service.service';

describe('CustomerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerServiceService = TestBed.get(CustomerServiceService);
    expect(service).toBeTruthy();
  });
});
