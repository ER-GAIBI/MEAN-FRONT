import { TestBed } from '@angular/core/testing';

import { DeByServiceService } from './de-by-service.service';

describe('DeByServiceService', () => {
  let service: DeByServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeByServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
