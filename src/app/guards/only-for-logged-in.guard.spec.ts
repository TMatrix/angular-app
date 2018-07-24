import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyForLoggedInGuard } from './only-for-logged-in.guard';

describe('OnlyForLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyForLoggedInGuard]
    });
  });

  it('should ...', inject([OnlyForLoggedInGuard], (guard: OnlyForLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
