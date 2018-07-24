import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyfotnotloggedGuard } from './onlyfotnotlogged.guard';

describe('OnlyfotnotloggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyfotnotloggedGuard]
    });
  });

  it('should ...', inject([OnlyfotnotloggedGuard], (guard: OnlyfotnotloggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
