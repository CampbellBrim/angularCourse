import { TestBed } from '@angular/core/testing';

import { CourseResolverGuard } from './course-resolver.guard';

describe('CourseResolverGuard', () => {
  let guard: CourseResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
