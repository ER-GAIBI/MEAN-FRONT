import { TestBed } from '@angular/core/testing';

import { GrServiceService } from './gr-service.service';

describe('GrServiceService', () => {
  let service: GrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
