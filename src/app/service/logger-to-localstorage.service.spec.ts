import { TestBed } from '@angular/core/testing';

import { LoggerToLocalstorageService } from './logger-to-localstorage.service';

describe('LoggerToLocalstorageService', () => {
  let service: LoggerToLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerToLocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
