import { TestBed, inject } from '@angular/core/testing';

import { SearcjhRequestService } from './searcjh-request.service';

describe('SearcJhRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearcjhRequestService]
    });
  });

  it('should be created', inject([SearcjhRequestService], (service: SearchRequestService) => {
    expect(service).toBeTruthy();
  }));
});
