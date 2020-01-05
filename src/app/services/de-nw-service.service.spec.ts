import { TestBed } from '@angular/core/testing';

import { DeNwServiceService } from './de-nw-service.service';

describe('DeNwServiceService', () => {
  let service: DeNwServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeNwServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
