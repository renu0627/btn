import { TestBed } from '@angular/core/testing';

import { BtnService } from './btn.service';

describe('BtnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtnService = TestBed.get(BtnService);
    expect(service).toBeTruthy();
  });
});
