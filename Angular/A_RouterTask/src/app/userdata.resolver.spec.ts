import { TestBed } from '@angular/core/testing';

import { UserdataResolver } from './userdata.resolver';

describe('UserdataResolver', () => {
  let resolver: UserdataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserdataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
