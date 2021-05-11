import { TestBed } from '@angular/core/testing';

import { StoreScriptService } from '../store-script.service';

describe('StoreScriptService', () => {
  let service: StoreScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
