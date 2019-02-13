import { TestBed } from '@angular/core/testing';

import { AllUSersService } from './all-users.service';

describe('AllUSersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllUSersService = TestBed.get(AllUSersService);
    expect(service).toBeTruthy();
  });
});
