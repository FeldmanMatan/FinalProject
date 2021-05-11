import { TestBed } from '@angular/core/testing';

import { WindowsDaysOffService } from '../window-day-off.service';

describe('WindowDayOffService', () => {
  let service: WindowsDaysOffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsDaysOffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
