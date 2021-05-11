import { TestBed } from '@angular/core/testing';

import { PrefcourseService } from '../prefcourse.service';

describe('PrefcourseService', () => {
  let service: PrefcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
