import { TestBed } from '@angular/core/testing';

import { ReplaysubjectService } from './replaysubject.service';

describe('ReplaysubjectService', () => {
  let service: ReplaysubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaysubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
