import { TestBed } from '@angular/core/testing';

import { IeServiceService } from './ie-service.service';

describe('IeServiceService', () => {
  let service: IeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
