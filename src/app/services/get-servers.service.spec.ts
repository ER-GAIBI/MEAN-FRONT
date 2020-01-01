import { TestBed } from '@angular/core/testing';

import { GetServersService } from './get-servers.service';

describe('GetServersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetServersService = TestBed.get(GetServersService);
    expect(service).toBeTruthy();
  });
});
