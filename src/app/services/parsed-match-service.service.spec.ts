import { TestBed } from '@angular/core/testing';

import { ParsedMatchServiceService } from './parsed-match-service.service';

describe('ParsedMatchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParsedMatchServiceService = TestBed.get(ParsedMatchServiceService);
    expect(service).toBeTruthy();
  });
});
