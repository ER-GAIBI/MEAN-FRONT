import { TestBed } from '@angular/core/testing';
import {GbService} from './gbService';


describe('MarketServerService', () => {
  let service: GbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
