import { TestBed } from '@angular/core/testing';

import { DatevalidatorService } from './datevalidator.service';

describe('DatevalidatorService', () => {
  let service: DatevalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatevalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
