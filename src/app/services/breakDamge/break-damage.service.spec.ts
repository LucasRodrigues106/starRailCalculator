import { TestBed } from '@angular/core/testing';

import { BreakDamageService } from './break-damage.service';

describe('BreakDamageService', () => {
  let service: BreakDamageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakDamageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
