import { TestBed } from '@angular/core/testing';

import { ForUserGuard } from './for-user.guard';

describe('ForUserGuard', () => {
  let guard: ForUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
