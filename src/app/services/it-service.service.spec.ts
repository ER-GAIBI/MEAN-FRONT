import { TestBed } from '@angular/core/testing';

import { ItServiceService } from './it-service.service';

describe('ItServiceService', () => {
  let service: ItServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
