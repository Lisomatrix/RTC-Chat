import { TestBed } from '@angular/core/testing';

import { RTCService } from './rtc.service';

describe('RTCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RTCService = TestBed.get(RTCService);
    expect(service).toBeTruthy();
  });
});
