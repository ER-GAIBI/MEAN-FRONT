import { TestBed } from '@angular/core/testing';

import { EsServiceService } from './es-service.service';

describe('EsServiceService', () => {
  let service: EsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
