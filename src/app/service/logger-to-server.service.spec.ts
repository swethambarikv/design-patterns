import { TestBed } from '@angular/core/testing';

import { LoggerToServerService } from './logger-to-server.service';

describe('LoggerToServerService', () => {
  let service: LoggerToServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerToServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
